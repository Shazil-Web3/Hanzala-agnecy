"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  index,
}) => {
  const handleContactClick = () => {
    if (typeof window !== "undefined" && typeof window.scrollToContact === "function") {
      window.scrollToContact();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="glass-card p-6 h-full flex flex-col group cursor-pointer"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {Icon && <Icon className="w-8 h-8 text-primary-foreground" />}
      </div>

      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

      {Array.isArray(features) && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Button
        onClick={handleContactClick}
        variant="outline"
        className="w-full mt-auto border border-gray-600 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
      >
        Learn More
      </Button>
    </motion.div>
  );
};
