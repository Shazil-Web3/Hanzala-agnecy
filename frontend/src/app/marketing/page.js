"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Video, 
  Facebook, 
  Zap,
  Users,
  TrendingUp,
  Target,
  BarChart,
  Eye,
  MousePointer
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Google Ads",
    description: "Targeted search campaigns that capture high-intent customers when they're ready to buy.",
    features: [
      "Search & Display campaigns",
      "Shopping ads setup", 
      "Keyword research & optimization",
      "Landing page optimization",
      "Conversion tracking",
      "A/B testing & optimization"
    ]
  },
  {
    icon: Video,
    title: "YouTube Ads",
    description: "Engaging video campaigns that build brand awareness and drive qualified traffic.",
    features: [
      "Video ad creation & editing",
      "Audience targeting & research",
      "Campaign optimization",
      "Custom thumbnail design",
      "Performance analytics",
      "Remarketing campaigns"
    ]
  },
  {
    icon: Facebook,
    title: "Meta Ads (Facebook/Instagram)",
    description: "Social media advertising that connects with your ideal customers where they spend their time.",
    features: [
      "Facebook & Instagram campaigns",
      "Custom audience creation",
      "Creative design & copywriting",
      "Pixel setup & tracking",
      "Lookalike audience targeting",
      "Messenger & WhatsApp ads"
    ]
  },
  {
    icon: Zap,
    title: "TikTok Ads",
    description: "Viral marketing campaigns that tap into TikTok's massive, engaged user base.",
    features: [
      "In-feed video ads",
      "Brand takeover campaigns",
      "Hashtag challenges",
      "Creator partnerships",
      "Trend analysis & strategy",
      "Performance optimization"
    ]
  },
  {
    icon: Target,
    title: "Snapchat Ads",
    description: "Innovative ad formats that reach younger demographics with engaging, interactive content.",
    features: [
      "Snap ads & story ads",
      "AR lens campaigns",
      "Geofilter advertising",
      "Audience targeting",
      "Creative optimization",
      "Campaign performance tracking"
    ]
  }
];

const caseStudies = [
  {
    title: "Google Ads Service",
    platform: "Search & Display Campaigns",
    metrics: [
      { label: "ROAS", value: "4x+" },
      { label: "CTR", value: "3%+" },
      { label: "Conv Rate", value: "2%+" }
    ],
    result: "Get exceptional return on ad spend with targeted campaigns that capture high-intent customers."
  },
  {
    title: "YouTube Ads Service", 
    platform: "Video Marketing Campaigns",
    metrics: [
      { label: "Reach", value: "Millions" },
      { label: "Engagement", value: "High" },
      { label: "Conversions", value: "Significant" }
    ],
    result: "Reach massive audiences with engaging video content and achieve substantial conversion increases."
  },
  {
    title: "Meta Ads Service",
    platform: "Facebook & Instagram",
    metrics: [
      { label: "CAC", value: "Reduced" },
      { label: "Signups", value: "Increased" },
      { label: "Revenue", value: "Boosted" }
    ],
    result: "Dramatically reduce customer acquisition costs while significantly increasing signups and revenue."
  },
  {
    title: "TikTok Ads Service",
    platform: "Viral Marketing Campaigns", 
    metrics: [
      { label: "Cost/Lead", value: "Lowered" },
      { label: "Leads", value: "Scaled" },
      { label: "Revenue", value: "Multiplied" }
    ],
    result: "Scale your lead generation while reducing cost per acquisition and multiplying your revenue."
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Average 300% increase in qualified leads within 90 days."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified specialists across all major advertising platforms."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with deep expertise in digital marketing and advertising."
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Real-time reporting and regular strategy calls to track progress."
  }
];

export default function Marketing() {
  const handleContactClick = () => {
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
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Multi-platform advertising campaigns that deliver measurable results. 
              From Google to TikTok, we make your marketing budget work harder.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Avg Lead Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4.2x</div>
              <div className="text-sm text-muted-foreground">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">Client Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              Scale Your Business
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Advertising Platforms We Master
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From search to social, video to display—we create cohesive campaigns 
              across all major platforms to maximize your reach and ROI.
            </p>
          </motion.div>

          {/* Enhanced Professional Grid Layout */}
          <div className="space-y-12">
            {/* First Row - 2 Large Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0 shadow-lg group-hover:shadow-primary/30">
                        <service.icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="text-sm text-muted-foreground flex items-start group-hover:text-foreground/90 transition-colors"
                        >
                          <MousePointer className="w-4 h-4 text-primary mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 3 Medium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(2, 5).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + index * 0.15,
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
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 mx-auto shadow-lg group-hover:shadow-primary/30">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors text-center">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 flex-grow text-center text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.05 }}
                          className="text-xs text-muted-foreground flex items-start group-hover:text-foreground/90 transition-colors"
                        >
                          <MousePointer className="w-3 h-3 text-primary mt-0.5 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Our Marketing Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine creative strategy with data science to deliver campaigns 
              that not only look great but drive real business results.
            </p>
          </motion.div>

          {/* Professional Grid Layout */}
          <div className="space-y-12">
            {/* First Row - 2 Large Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {benefits.slice(0, 2).map((benefit, index) => (
                <motion.div
                  key={benefit.title}
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
                        <benefit.icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 Medium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.slice(2, 4).map((benefit, index) => (
                <motion.div
                  key={benefit.title}
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
                      <benefit.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors text-center">
                      {benefit.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 flex-grow text-center">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Get These Results, Join Us Now
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your business with our proven digital marketing strategies. 
              Get our services and achieve exceptional growth with our expert team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="glass-card p-8"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <div className="text-sm text-primary font-medium">
                    {study.platform}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground italic text-sm">
                  {study.result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Scale Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their growth 
              with our proven digital marketing strategies. Get started today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Get Free Strategy Call
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                size="lg"
                className="border border-gray-600 hover:bg-accent px-8 py-4 text-lg"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
