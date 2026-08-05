"use client";

import { motion } from "framer-motion";
import { ContactForm } from "../../components/ContactForm";

export default function ContactPage() {
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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-16 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">
                Get In Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Ready to start your business journey? We&apos;re here to help you every step of the way. 
              Let&apos;s discuss your project and see how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 hidden md:block"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you within 24 hours. 
              We&apos;re excited to learn about your project and how we can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 max-w-2xl mx-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
