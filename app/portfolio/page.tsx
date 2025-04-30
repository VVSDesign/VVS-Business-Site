"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: "Web Dev",
    description: "A full-featured online store with real-time inventory management",
    image: "/Blender Diamond.png",
    tags: ["Next.js", "TypeScript", "Stripe"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=1200",
        caption: "E-commerce Dashboard"
      },
      {
        url: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200",
        caption: "Analytics Interface"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        caption: "Mobile Responsive Design"
      }
    ]
  },
  {
    title: "App Dev",
    description: "Patient management system with analytics and reporting",
    image: "/Blender Diamond.png",
    tags: ["React", "Node.js", "MongoDB"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200",
        caption: "Mobile App Interface"
      },
      {
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
        caption: "User Dashboard"
      },
      {
        url: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200",
        caption: "Cross-platform Experience"
      }
    ]
  },
  {
    title: "3D Modeling",
    description: "Mobile-first social platform with real-time messaging",
    image: "/Blender Diamond.png",
    tags: ["React Native", "Firebase", "WebSocket"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200",
        caption: "3D Product Visualization"
      },
      {
        url: "https://images.unsplash.com/photo-1633899306328-c5e70574adb3?q=80&w=1200",
        caption: "Architectural Rendering"
      },
      {
        url: "https://images.unsplash.com/photo-1632292220916-e9c34dd75db2?q=80&w=1200",
        caption: "Character Modeling"
      }
    ]
  },
  {
    title: "Digital Assets",
    description: "From Logo Design, Brand development",
    image: "/home/project/IMGS/Envy7DSdesign.png",
    tags: ["Vue.js", "Django", "PostgreSQL"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200",
        caption: "Brand Identity Design"
      },
      {
        url: "https://images.unsplash.com/photo-1632059368252-be6b129bc6a0?q=80&w=1200",
        caption: "Logo Collection"
      },
      {
        url: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=1200",
        caption: "Marketing Materials"
      }
    ]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work and Reviews</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore latest projects and see how I've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-6 h-full flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Gallery Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-background p-8 rounded-lg shadow-xl max-w-5xl w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.gallery[currentImageIndex].url}
                  alt={selectedProject.gallery[currentImageIndex].caption}
                  fill
                  className="object-cover"
                />
                
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <p className="text-center mt-4 text-muted-foreground">
                {selectedProject.gallery[currentImageIndex].caption}
              </p>

              <div className="flex justify-center gap-2 mt-4">
                {selectedProject.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 pb-16"
        >
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