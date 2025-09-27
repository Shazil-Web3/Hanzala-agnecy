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
import { Button } from "../../components/ui/button";

const plans = [
  {
    name: "Basic",
    description: "Perfect for small businesses just getting started online.",
    features: [
      "3-page custom website",
      "Mobile responsive design",
      "Basic SEO optimization", 
      "Contact form integration",
      "Social media links",
      "Basic admin panel setup",
      "API integration"
    ],
    popular: false
  },
  {
    name: "Standard",
    description: "Ideal for growing businesses that need more functionality.",
    features: [
      "6-page custom website",
      "Advanced mobile optimization",
      "Complete SEO package",
      "Advanced forms & automation",
      "1 month free hosting",
      "Custom admin panel",
      "API management",
      "Social media integration",
      "Security checkup & implementation"
    ],
    popular: true
  },
  {
    name: "Premium", 
    description: "For established businesses requiring enterprise-level features.",
    features: [
      "Unlimited pages",
      "Custom functionality development",
      "Advanced e-commerce features",
      "Multi-language support",
      "Custom CMS development",
      "Advanced SEO & performance",
      "2 months free hosting",
      "Comprehensive admin panel",
      "Priority support",
      "1 month maintenance included",
      "Third-party integrations",
      "Advanced security features",
      "Complex database integration",
      "Custom API development"
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
    title: "Custom Admin Panel",
    description: "User-friendly admin panel to manage your website content and settings easily."
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
    answer: "For maintenance, you can contact us directly. We offer maintenance for Premium websites, but for Standard or Basic plans, we can discuss the cost as it&apos;s not included in the plan."
  },
  {
    question: "Which languages are used for developing websites?",
    answer: "No WordPress or any other services are used. We make custom websites through custom languages. We use modern technologies including React, Next.js, Node.js, and two types of databases: SQL and NoSQL. You can contact us to discuss the specific languages and technologies you want based on the type of website you want to make."
  },
  {
    question: "What if I need changes after the site is complete?",
    answer: "Post-launch support is only available in Premium plans. For Standard or Basic plans, changes cannot be done after the website is deployed."
  },
  {
    question: "Do you help with hosting and domain setup?",
    answer: "You can contact us for discussion of hosting and domain. For Premium and Standard plans, we provide hosting. For domain, you can contact us if you want to buy a domain."
  }
];

export default function WebsiteCreation() {
  const handleContactClick = () => {
    window.location.href = "/contact";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>500+ Websites Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">
                Professional Websites
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-muted-foreground">
                Built for Your Success
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with custom websites that deliver exceptional performance, 
              stunning design, and measurable results. From concept to launch, we handle everything.
            </p>
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Optimized for speed and performance across all devices</p>
            </div>
            <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <BarChart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">Results Driven</h3>
              <p className="text-sm text-muted-foreground">Designed to grow your business and engage your audience</p>
            </div>
            <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Your Website Quote
            </Button>
           
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 px-4">
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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                className="glass-card p-4 md:p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  <span className="md:hidden">
                    {feature.title === "Custom Design" && "Unique, branded websites"}
                    {feature.title === "Mobile First" && "Fully responsive designs"}
                    {feature.title === "SEO Optimized" && "Built-in SEO best practices"}
                    {feature.title === "Custom Admin Panel" && "User-friendly admin panel"}
                    {feature.title === "Fast Loading" && "Optimized for speed"}
                    {feature.title === "Secure & Reliable" && "Built with security in mind"}
                  </span>
                  <span className="hidden md:inline">{feature.description}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 md:py-24 px-4">
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
                  Get Price
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 px-4">
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
