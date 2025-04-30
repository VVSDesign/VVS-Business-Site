"use client";

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/GsIjfET7rOpV-Spp/scene.splinecode"
        />
      </div>
      
      <div className="relative z-10 h-screen">
        {/* Corner Navigation Links */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-8 left-8"
        >
          <Link href="/services" className="text-primary hover:text-primary/80 text-xl font-medium transition-colors">
            Services
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-8 right-8"
        >
          <Link href="/portfolio" className="text-primary hover:text-primary/80 text-xl font-medium transition-colors">
            Work
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 right-8"
        >
          <Link href="/contact" className="text-primary hover:text-primary/80 text-xl font-medium transition-colors">
            Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-8"
        >
          <Link href="/about" className="text-primary hover:text-primary/80 text-xl font-medium transition-colors">
            About
          </Link>
        </motion.div>
      </div>
    </main>
  );
}