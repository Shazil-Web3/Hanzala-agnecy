"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { API_ENDPOINTS } from "@/config/api";
import { ChevronDown, Check } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  countryCode: z.string().min(1, "Please enter country code"),
  phone: z.string().min(7).max(15).regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service").refine((val) => val !== "", "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const serviceOptions = [
  { value: "marketing", label: "Marketing" },
  { value: "website", label: "Website" },
  { value: "llc-ltd", label: "LLC, LTD" },
  { value: "payment-gateway", label: "Payment Gateway Formation" },
];

const placeholderOption = { value: "", label: "Choose an option" };

export const ContactForm = () => {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(placeholderOption);
  const dropdownRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
    },
  });

  const serviceValue = watch("service");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServiceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setValue("service", service.value);
    setIsServiceDropdownOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
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
        
        // Hide success notification after 10 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 10000);

        toast({
          title: "Message sent successfully!",
          description: result.message,
          duration: 5000,
        });

        reset();
        setSelectedService(placeholderOption); // Reset to "Choose an option"
        setIsServiceDropdownOpen(false);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full"
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
              <span className="font-semibold text-lg">Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  {...register("name")}
                  className="bg-black border border-gray-600 text-foreground"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  {...register("email")}
                  type="email"
                  className="bg-black border border-gray-600 text-foreground"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <div className="flex space-x-2">
                  <div className="w-24">
                    <Input
                      {...register("countryCode")}
                      type="tel"
                      className="bg-black border border-gray-600 text-foreground text-center"
                      placeholder="+92"
                    />
                    {errors.countryCode && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.countryCode.message}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      {...register("phone")}
                      type="tel"
                      className="bg-black border border-gray-600 text-foreground"
                      placeholder="123-456-7890"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <Input
                  {...register("company")}
                  className="bg-black border border-gray-600 text-foreground"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Service *</label>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  className="w-full bg-black border border-gray-600 text-foreground rounded-md px-3 py-2 text-left focus:outline-none focus:ring-0 focus:border-gray-600 hover:border-gray-600 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className={selectedService.value === "" ? "text-muted-foreground" : "text-foreground"}>
                    {selectedService.label}
                  </span>
                  <motion.div
                    animate={{ rotate: isServiceDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isServiceDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute z-50 w-full mt-1 bg-black border border-gray-600 rounded-md shadow-lg overflow-hidden"
                    >
                      {serviceOptions.map((option, index) => (
                        <motion.button
                          key={option.value}
                          type="button"
                          onClick={() => handleServiceSelect(option)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`w-full px-3 py-2 text-left hover:bg-gray-800 transition-colors duration-150 flex items-center justify-between ${
                            selectedService.value === option.value
                              ? "bg-primary/10 text-primary"
                              : "text-foreground"
                          }`}
                        >
                          <span>{option.label}</span>
                          {selectedService.value === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Check className="w-4 h-4 text-primary" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {errors.service && (
                <p className="text-destructive text-sm mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <Textarea
                {...register("message")}
                className="bg-black border border-gray-600 text-foreground min-h-[120px]"
                placeholder="Tell us about your project and how we can help..."
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
      </form>
    </div>
  );
};
