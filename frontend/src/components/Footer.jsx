'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Shield, Globe, TrendingUp, Zap, Target } from 'lucide-react';

const Footer = () => {
  const scrollToContact = () => {
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'Marketing', href: '/marketing', icon: TrendingUp },
    { name: 'Website Creation', href: '/website-creation', icon: Globe },
    { name: 'LLC Formation', href: '/', icon: Shield },
    { name: 'LTD Formation', href: '/', icon: Target },
    { name: 'Payment Gateways Formation', href: '/', icon: Zap },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Website Creation', href: '/website-creation' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Reviews', href: '#reviews', onClick: () => window.openReviewForm?.() },
  ];

  return (
    <footer className="relative border-t border-slate-800/60 bg-[radial-gradient(ellipse_at_bottom,theme(colors.blue.900/25),transparent_55%)]">
      {/* Pure black base with subtle blue fade at bottom */}
      <div className="bg-black/95">
        <div className="max-w-7xl mx-auto px-4 py-12 pb-6">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-8">
            {/* Company Info (icon removed) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-white">Hanzwell Agency</h3>
                <p className="text-sm text-slate-300">Digital Marketing Solutions</p>
              </div>

              <p className="text-slate-300 mb-6 max-w-lg leading-relaxed">
                Join us now and get the best results for your business! Transform your digital presence with our proven marketing strategies and expert team. Let's achieve exceptional growth together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>hanzwellagency@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+447737297721</span>
                </div>
               
              </div>
              {/* (CTA button removed) */}
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.05 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={service.href}
                        className="group flex items-center space-x-3 text-slate-300 hover:text-white transition-all"
                      >
                        <IconComponent className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:translate-x-0.5 transition-transform">{service.name}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-slate-300 hover:text-white transition-all hover:translate-x-0.5"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-all hover:translate-x-0.5"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Tiny bottom line with year (no bulky bar, right-aligned) */}
          <div className="flex justify-end">
            <span className="text-[11px] leading-none text-slate-400/80 select-none">2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
