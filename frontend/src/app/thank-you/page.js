"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, Home, Sparkles, TrendingUp, Globe, Award, Users } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const businessHighlights = [
  {
    icon: Clock,
    title: "24-Hour Response",
    description: "Our dedicated account strategists review every submission immediately and reach out within 24 hours."
  },
  {
    icon: ShieldCheck,
    title: "Customized Strategy",
    description: "We don't do generic solutions. We build a custom roadmap tailored specifically to your business goals."
  },
  {
    icon: Sparkles,
    title: "Proven Growth Execution",
    description: "Over 500+ businesses scaled with verified marketing campaigns and professional web infrastructure."
  }
];

const serviceOverview = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "High-ROI multi-channel ad campaigns across Google, Meta, TikTok, and YouTube."
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Lightning-fast, high-converting websites and modern web applications."
  },
  {
    icon: Award,
    title: "LLC & LTD Formation",
    description: "Seamless US/UK business legal entity formation and official registration."
  },
  {
    icon: Users,
    title: "Payment Gateway Setup",
    description: "Reliable payment processing integration & merchant account approval."
  }
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden bg-black text-white">
      {/* Background Glow Orbs */}
      <div className="orb-1 opacity-40"></div>
      <div className="orb-2 opacity-30"></div>
      <div className="orb-3 opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Success Animated Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 text-center mb-12 border border-emerald-500/30 shadow-2xl relative overflow-hidden"
        >
          {/* Top Decorative Banner */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600"></div>

          {/* Animated Checkmark Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, 0] }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/40 shadow-lg shadow-emerald-500/20"
          >
            <CheckCircle2 className="w-14 h-14 text-emerald-400" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Thank You for Choosing <span className="gradient-text">Hanzwell Agency!</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Your inquiry has been successfully submitted. Our team of specialists is already reviewing your details and will get back to you shortly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg" className="bg-emerald-500 text-black hover:bg-emerald-400 font-bold px-8 h-12 text-base flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Return to Home</span>
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800 font-semibold px-8 h-12 text-base flex items-center space-x-2">
                <span>Learn About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* What Happens Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 border border-gray-800 hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Full Business Services & Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center space-x-3">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <span>Explore How We Scale Businesses</span>
          </h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed">
            At Hanzwell Agency, we don&apos;t just build websites or launch ads—we construct complete digital ecosystems engineered for sustainable revenue and rapid growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceOverview.map((svc) => (
              <div key={svc.title} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/80 flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                  <svc.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{svc.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
