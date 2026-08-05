'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const PricingCard = ({ 
  title, 
  description, 
  price, 
  period, 
  features, 
  isPopular = false, 
  onContact 
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative glass-card rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
        isPopular ? 'ring-2 ring-white/20 scale-105' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-1 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            <Star className="w-4 h-4 fill-current" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-white">${price}</span>
          <span className="text-gray-400 ml-2">/{period}</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-3"
          >
            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContact}
        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
          isPopular
            ? 'bg-white text-black hover:bg-gray-100'
            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
        }`}
      >
        Contact Us
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;
