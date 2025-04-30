"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code2, Briefcase, Mail, Home, User } from 'lucide-react';

const FloatingNavbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [opacity, setOpacity] = useState(0.9);

  useEffect(() => {
    const updateOpacity = () => {
      const newOpacity = Math.max(0.6, 0.9 - (scrollY.get() / 1000));
      setOpacity(newOpacity);
    };

    const unsubscribe = scrollY.on("change", updateOpacity);
    return () => unsubscribe();
  }, [scrollY]);

  if (pathname === '/') return null;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/services', label: 'Services', icon: Code2 },
    { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
    { path: '/about', label: 'About', icon: User },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-6">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ opacity }}
        className="bg-background/80 backdrop-blur-sm rounded-full border shadow-lg px-6 py-3"
      >
        <div className="flex items-center gap-2 md:gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 hover:bg-primary/10 ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon size={16} />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
};

export default FloatingNavbar;