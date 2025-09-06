"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, X } from "lucide-react";
import { API_ENDPOINTS } from "@/config/api";

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  rating: z.number().min(1, "Please select a rating").max(5, "Rating must be between 1 and 5"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const ReviewForm = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0
    }
  });

  const currentRating = watch("rating");

  const onSubmit = async (data) => {
    try {
      const response = await fetch(API_ENDPOINTS.REVIEWS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success notification
        setShowSuccess(true);
        
        // Hide success notification after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);

        toast({
          title: "Review submitted successfully!",
          description: "Thank you for your feedback. Your review will be published after approval.",
          duration: 5000,
        });

        reset();
        onClose();
      } else {
        throw new Error(result.message || 'Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleStarClick = (rating) => {
    setValue("rating", rating);
  };

  const handleStarHover = (rating) => {
    setHoveredStar(rating);
  };

  const handleStarLeave = () => {
    setHoveredStar(0);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-black border border-gray-800 rounded-2xl p-8 w-full max-w-md relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Leave a Review</h2>
            <p className="text-gray-400">Share your experience with us</p>
          </div>

          {/* Success Notification */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full mb-6"
              >
                <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-center space-x-2 animate-pulse">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-semibold text-lg">Review submitted successfully!</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Name *</label>
              <Input
                {...register("name")}
                className="bg-black border border-gray-600 text-white placeholder-gray-400"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white">
                Company (Optional)
              </label>
              <Input
                {...register("company")}
                className="bg-black border border-gray-600 text-white placeholder-gray-400"
                placeholder="Your company name"
              />
            </div>

            {/* Rating Field */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Rating *</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => handleStarHover(star)}
                    onMouseLeave={handleStarLeave}
                    className="transition-colors duration-200"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoveredStar || currentRating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-400 hover:text-yellow-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rating.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Message *</label>
              <Textarea
                {...register("message")}
                className="bg-black border border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                placeholder="Tell us about your experience..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
