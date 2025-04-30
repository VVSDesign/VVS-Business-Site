"use client";

import { motion } from 'framer-motion';
import { Code2, Palette, Lightbulb, Target } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const philosophyPoints = [
    {
      icon: Code2,
      title: "Clean & Efficient Code",
      description: "I believe in writing maintainable, scalable code that stands the test of time. Every project is built with best practices and future growth in mind."
    },
    {
      icon: Palette,
      title: "Design Excellence",
      description: "Great design is more than aesthetics. It's about creating intuitive, engaging experiences that solve real problems and delight users."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "I stay at the forefront of technology, constantly learning and implementing cutting-edge solutions that give your project a competitive edge."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every decision is made with your goals in mind. I focus on delivering solutions that drive real business value and measurable results."
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Crafting digital experiences that make a difference
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Professional Background</h2>
          <p className="text-muted-foreground mb-6">
            With over 5 years of experience in web development and digital design, I've had the privilege of working with clients across various industries, from startups to established enterprises. My journey began with a passion for creating beautiful, functional websites, and has evolved into a comprehensive approach to digital solutions.
          </p>
          <p className="text-muted-foreground mb-6">
            I specialize in full-stack development, with expertise in modern frameworks and technologies including React, Next.js, Node.js, and various cloud platforms. My background in both design and development allows me to bridge the gap between aesthetics and functionality, creating solutions that are both beautiful and performant.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-lg bg-card border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Interested in working together? <br />
            Let's create something amazing.
          </p>
          
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            Free Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}