"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Website", href: "/website-creation" },
  { name: "Marketing", href: "/marketing" },
];

const Navbar = () => {
  const pathname = usePathname();
  const currentPath = pathname;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="nav-pill px-6 py-3">
          <div className="flex items-center space-x-8 relative">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentPath === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className={`relative z-10 ${currentPath === item.href ? 'text-black font-semibold' : ''}`}>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="nav-pill px-3 py-2">
          <div className="flex items-center space-x-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentPath === item.href && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className={`relative z-10 ${currentPath === item.href ? 'text-black font-semibold' : ''}`}>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
