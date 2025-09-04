"use client";

import { motion } from "framer-motion";
import { 
  Check, 
  Globe, 
  Smartphone, 
  Search, 
  BarChart,
  Zap,
  Shield,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$999",
    duration: "one-time",
    description: "Perfect for small businesses just getting started online.",
    features: [
      "5-page custom website",
      "Mobile responsive design",
      "Basic SEO optimization", 
      "Contact form integration",
      "Social media links",
      "1 month free hosting",
      "Basic analytics setup"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "$1,999",
    duration: "one-time", 
    description: "Ideal for growing businesses that need more functionality.",
    features: [
      "10-page custom website",
      "Advanced mobile optimization",
      "Complete SEO package",
      "E-commerce functionality",
      "Blog/news section",
      "Advanced forms & automation",
      "3 months free hosting",
      "Enhanced analytics",
      "Social media integration",
      "Basic maintenance (3 months)"
    ],
    popular: true
  },
  {
    name: "Premium", 
    price: "$3,999",
    duration: "one-time",
    description: "For established businesses requiring enterprise-level features.",
    features: [
      "Unlimited pages",
      "Custom functionality development",
      "Advanced e-commerce features",
      "Multi-language support",
      "Custom CMS development",
      "Advanced SEO & performance",
      "6 months free hosting",
      "Comprehensive analytics",
      "Priority support",
      "6 months maintenance included",
      "Training & documentation",
      "Third-party integrations"
    ],
    popular: false
  }
];

const features = [
  {
    icon: Globe,
    title: "Custom Design",
    description: "Unique, branded websites tailored to your business identity and goals."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Fully responsive designs that look perfect on all devices and screen sizes."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built-in SEO best practices to help you rank higher in search results."
  },
  {
    icon: BarChart,
    title: "Analytics Ready",
    description: "Comprehensive tracking and analytics to measure your website's performance."
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Optimized for speed with modern technologies and best practices."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security in mind, including SSL certificates and regular updates."
  }
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Basic websites typically take 2-3 weeks, Standard takes 3-4 weeks, and Premium can take 6-8 weeks depending on complexity and custom requirements."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes! All plans include initial maintenance periods, and we offer ongoing maintenance packages to keep your site updated, secure, and performing optimally."
  },
  {
    question: "Can I update the website content myself?",
    answer: "Absolutely. We build all websites with user-friendly content management systems, and provide training so you can easily update text, images, and pages."
  },
  {
    question: "What if I need changes after the site is complete?",
    answer: "We offer revision rounds during development, and post-launch support. Additional changes can be handled through our maintenance packages or hourly rates."
  },
  {
    question: "Do you help with hosting and domain setup?",
    answer: "Yes, we can handle all technical aspects including domain registration, hosting setup, and ongoing technical management if needed."
  }
];

export default function WebsiteCreation() {
  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Website Creation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Professional websites that convert visitors into customers. 
              Built for performance, designed for results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              What Makes Our Websites Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We don&apos;t just build websites—we create powerful digital experiences 
              that drive business growth and deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
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
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. All plans include 
              custom design, development, and launch support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className={`glass-card p-8 relative ${
                  plan.popular 
                    ? "ring-2 ring-primary scale-105" 
                    : "hover:scale-105"
                } transition-transform duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.duration}
                  </p>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleContactClick}
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-accent text-accent-foreground hover:bg-accent/90"
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our website creation process and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="glass-card p-8 max-w-md mx-auto">
              <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help answer any questions about your website project.
              </p>
              <Button
                onClick={handleContactClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
