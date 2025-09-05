"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Clock,
  Target,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Trustworthy",
    description:
      "We prioritize transparency and honesty in every client relationship.",
  },
  {
    icon: Clock,
    title: "Reliable",
    description:
      "Consistent delivery on time, every time. Your success is our commitment.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on measurable outcomes that directly impact your business growth.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Your goals become our goals. We're invested in your long-term success.",
  },
];

const services = [
  {
    icon: TrendingUp,
    title: "Marketing",
    description:
      "Multi-platform campaigns designed to maximize your ROI and growth.",
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Professional web presence that converts visitors into customers.",
  },
  {
    icon: Award,
    title: "LLC Formation",
    description:
      "Complete legal entity setup with all required documentation and compliance.",
  },
  {
    icon: Target,
    title: "LTD Formation",
    description:
      "Advanced scaling strategies for established businesses ready to grow.",
  },
  {
    icon: Users,
    title: "Payment Gateways Formation",
    description:
      "Strategic payment gateway development tailored to your specific business needs.",
  },
];

const achievements = [
  { number: "500+", label: "Businesses Formed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "$100k+", label: "Client Revenue Generated" },
  { number: "24/7", label: "Support Available" },
];

export default function About() {
  const handleGetStarted = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/contact";
    }
  };

  return (
    <div className="pt-20">
      {/* Background Orbs */}
      <div className="orb-1"></div>
      <div className="orb-2"></div>
      <div className="orb-3"></div>
      <div className="orb-4"></div>
      <div className="orb-5"></div>
      <div className="orb-6"></div>
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">About Wise Formation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              We&apos;re more than a service provider—we&apos;re your strategic partner in
              building and scaling successful businesses from the ground up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-22 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by entrepreneurs for entrepreneurs, Wise Formation
                understands the unique challenges of starting and growing a
                business. Our team combines legal expertise, technical skills, and
                marketing prowess to provide comprehensive solutions that actually
                work.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We&apos;ve helped hundreds of businesses navigate the complex
                landscape of formation, compliance, digital presence, and growth
                marketing. Our mission is simple: make business success accessible
                to everyone.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of business
              development, from initial formation to advanced growth strategies.
            </p>
          </motion.div>

          {/* Professional Grid Layout */}
          <div className="space-y-12">
            {/* First Row - 2 Large Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="glass-card p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden"
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <service.icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 3 Medium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(2, 5).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="glass-card p-6 h-full flex flex-col group cursor-pointer relative overflow-hidden"
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors text-center">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 flex-grow text-center">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose Wise Formation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of working with a team that truly cares
              about your success and has the expertise to deliver results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="glass-card p-8 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-green-500/30">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-green-500 transition-colors">Proven Track Record</h3>
                <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                  500+ successful business formations with a 98% client satisfaction
                  rate.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-500/30 rounded-full group-hover:bg-green-500/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-green-500/20 rounded-full group-hover:bg-green-500/40 transition-colors duration-300"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="glass-card p-8 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/30">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors">Expert Team</h3>
                <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                  Dedicated professionals with deep expertise in law, technology, and
                  marketing.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500/30 rounded-full group-hover:bg-blue-500/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-500/20 rounded-full group-hover:bg-blue-500/40 transition-colors duration-300"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="glass-card p-8 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/30">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-500 transition-colors">Fast Turnaround</h3>
                <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                  Quick processing times without compromising on quality or attention
                  to detail.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500/30 rounded-full group-hover:bg-purple-500/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-500/20 rounded-full group-hover:bg-purple-500/40 transition-colors duration-300"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
