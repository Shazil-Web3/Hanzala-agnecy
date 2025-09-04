"use client";

import { motion } from "framer-motion";
import { 
  Building, 
  Globe, 
  TrendingUp, 
  Users, 
  ArrowUp,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";

const services = [
  {
    icon: Building,
    title: "LLC Formation",
    description: "Complete LLC setup and registration services to get your business legally established.",
    features: [
      "State filing & documentation",
      "EIN tax ID number",
      "Operating agreement drafting",
      "Registered agent service"
    ]
  },
  {
    icon: Users,
    title: "Wise Formation",
    description: "Expert business formation consulting to choose the right structure for your needs.",
    features: [
      "Business structure analysis",
      "Tax optimization planning",
      "Compliance guidance",
      "Ongoing support"
    ]
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Professional websites that drive conversions and grow your online presence.",
    features: [
      "Custom design & development",
      "Mobile responsive",
      "SEO optimization",
      "Content management system"
    ]
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description: "Multi-platform digital marketing campaigns that deliver measurable results.",
    features: [
      "Google & Meta Ads",
      "Social media marketing",
      "Content creation",
      "Analytics & reporting"
    ]
  },
  {
    icon: ArrowUp,
    title: "Upside Formation",
    description: "Advanced business strategies to scale and optimize your growing company.",
    features: [
      "Growth strategy planning",
      "Process optimization",
      "Team development",
      "Performance metrics"
    ]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, TechStart LLC",
    content: "They handled our LLC formation seamlessly and got us online fast. Revenue increased 300% in the first quarter.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Mike Chen",
    role: "CEO, Growth Digital",
    content: "The marketing campaigns delivered exceptional ROI. Our customer acquisition cost dropped by 60%.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Owner, Local Boutique",
    content: "Professional service from start to finish. The website they built converts visitors into customers daily.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Park",
    role: "Founder, InnovateCorp",
    content: "Wise Formation's business advice saved us thousands in taxes. Highly recommend their expertise.",
    rating: 5,
    avatar: "DP"
  }
];

export default function Home() {
  const handleGetStarted = () => {
    if (typeof window !== "undefined" && typeof window.scrollToContact === "function") {
      window.scrollToContact();
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Heading with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">
                Launch Your Business with Confidence
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-muted-foreground">
                LLC Formation • Wise Setup • Websites • Marketing
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your vision into reality with our all-in-one business solutions. From seamless LLC and Wise formation to stunning websites and powerful marketing, we've got you covered.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Complete Business Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to start, grow, and scale your business. 
              Our comprehensive services are designed to work together seamlessly.
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
                        {service.icon && <service.icon className="w-10 h-10 text-primary-foreground" />}
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

                    {Array.isArray(service.features) && service.features.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Button
                      onClick={() => {
                        if (typeof window !== "undefined" && typeof window.scrollToContact === "function") {
                          window.scrollToContact();
                        }
                      }}
                      variant="outline"
                      className="w-full mt-auto border border-gray-600 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group-hover:border-primary group-hover:text-primary"
                    >
                      Learn More
                    </Button>
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
                      {service.icon && <service.icon className="w-8 h-8 text-primary-foreground" />}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors text-center">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 flex-grow text-center">
                      {service.description}
                    </p>

                    {Array.isArray(service.features) && service.features.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-primary font-medium">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    )}

                    <Button
                      onClick={() => {
                        if (typeof window !== "undefined" && typeof window.scrollToContact === "function") {
                          window.scrollToContact();
                        }
                      }}
                      variant="outline"
                      className="w-full mt-auto border border-gray-600 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group-hover:border-primary group-hover:text-primary"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. See what our satisfied clients have to say 
              about our services and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="glass-card p-8 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-purple-400 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-purple-300 transition-colors duration-300">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic group-hover:text-foreground transition-colors duration-300">&ldquo;{testimonial.content}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
