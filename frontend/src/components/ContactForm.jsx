"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  countryCode: z.string().min(1, "Please enter country code"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Thanks! We'll contact you soon.",
        duration: 5000,
      });

      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
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
                      placeholder="555 123-4567"
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
  );
};
