"use client";

import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Rocket, Palette, Gauge, X, Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    description: "Bespoke websites tailored to your unique business needs using cutting-edge technologies.",
    timeline: "1 week depending on complexity",
    process: [
      "Initial consultation and requirements gathering",
      "Design mockups and wireframes",
      "Development and implementation",
      "Testing and quality assurance",
      "Deployment and launch"
    ],
    tiers: [
      {
        name: "Basic",
        price: "$999",
        features: [
          "5-page responsive website",
          "Basic SEO optimization",
          "Contact form integration",
          "Mobile-friendly design",
          "2 rounds of revisions"
        ]
      },
      {
        name: "Professional",
        price: "$2,499",
        features: [
          "10-page responsive website",
          "Advanced SEO optimization",
          "Custom animations",
          "CMS integration",
          "E-commerce functionality",
          "5 rounds of revisions"
        ]
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited pages",
          "Full-stack development",
          "Custom features & integrations",
          "Performance optimization",
          "24/7 support",
          "Unlimited revisions"
        ]
      }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    timeline: "2-3 weeks",
    process: [
      "Project scoping and planning",
      "UI/UX design and prototyping",
      "Core functionality development",
      "Integration and testing",
      "App store submission and launch"
    ],
    tiers: [
      {
        name: "Starter",
        price: "$4,999",
        features: [
          "Single platform (iOS or Android)",
          "Basic features",
          "User authentication",
          "Basic UI/UX design",
          "3 rounds of revisions"
        ]
      },
      {
        name: "Advanced",
        price: "$9,999",
        features: [
          "Cross-platform development",
          "Advanced features",
          "Push notifications",
          "API integration",
          "Analytics integration",
          "5 rounds of revisions"
        ]
      },
      {
        name: "Premium",
        price: "Custom",
        features: [
          "Full-featured enterprise app",
          "Custom backend development",
          "Advanced security features",
          "Offline functionality",
          "24/7 support",
          "Unlimited revisions"
        ]
      }
    ]
  },
  {
    icon: Rocket,
    title: "3D Modeling & Graphic Design",
    description: "Ranging from complex 3d Models. custom logos and cover arts, I offer a large range of graphic design needs",
    timeline: "1 week",
    process: [
      "Concept discussion and reference gathering",
      "Initial sketches and basic modeling",
      "Detailed modeling and texturing",
      "Lighting and rendering",
      "Final adjustments and delivery"
    ],
    tiers: [
      {
        name: "Basic",
        price: "$499",
        features: [
          "Basic 3D model",
          "2 texture variations",
          "Basic lighting setup",
          "Standard resolution",
          "2 rounds of revisions"
        ]
      },
      {
        name: "Professional",
        price: "$999",
        features: [
          "Complex 3D model",
          "Multiple texture variations",
          "Advanced lighting & materials",
          "High resolution",
          "Animation ready",
          "4 rounds of revisions"
        ]
      },
      {
        name: "Premium",
        price: "Custom",
        features: [
          "Custom complex models",
          "Photo-realistic rendering",
          "Full animation setup",
          "4K resolution",
          "Source files included",
          "Unlimited revisions"
        ]
      }
    ]
  },
  {
    icon: Palette,
    title: "Graphic Design Solutions",
    description: "User-centered design that combines aesthetics with functionality for maximum impact.",
    timeline: "3-5 days",
    process: [
      "Brand discovery and research",
      "Concept development",
      "Initial design drafts",
      "Refinement and iteration",
      "Final delivery with all formats"
    ],
    tiers: [
      {
        name: "Basic",
        price: "$799",
        features: [
          "5 page designs",
          "Wireframing",
          "Basic prototyping",
          "Style guide",
          "2 rounds of revisions"
        ]
      },
      {
        name: "Professional",
        price: "$1,999",
        features: [
          "10 page designs",
          "Advanced prototyping",
          "Interactive elements",
          "User flow diagrams",
          "Custom animations",
          "4 rounds of revisions"
        ]
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited pages",
          "Full design system",
          "Custom illustrations",
          "User testing",
          "Documentation",
          "Unlimited revisions"
        ]
      }
    ]
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description: "Scalable online stores with secure payment integration and inventory management.",
    timeline: "1-2 weeks",
    process: [
      "Store planning and architecture",
      "Product catalog setup",
      "Payment gateway integration",
      "Inventory system setup",
      "Launch and monitoring"
    ],
    tiers: [
      {
        name: "Basic Store",
        price: "$1,999",
        features: [
          "Up to 100 products",
          "Basic payment gateway",
          "Inventory management",
          "Order tracking",
          "3 rounds of revisions"
        ]
      },
      {
        name: "Business",
        price: "$4,999",
        features: [
          "Unlimited products",
          "Multiple payment gateways",
          "Advanced inventory system",
          "Customer accounts",
          "Analytics dashboard",
          "5 rounds of revisions"
        ]
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Custom features",
          "Multi-vendor support",
          "Advanced analytics",
          "API integration",
          "24/7 support",
          "Unlimited revisions"
        ]
      }
    ]
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed optimization and performance tuning to ensure your digital products run smoothly.",
    timeline: "3-5 days",
    process: [
      "Performance audit and analysis",
      "Optimization planning",
      "Implementation of improvements",
      "Testing and benchmarking",
      "Documentation and recommendations"
    ],
    tiers: [
      {
        name: "Basic",
        price: "$499",
        features: [
          "Basic speed optimization",
          "Performance audit",
          "Basic SEO improvements",
          "Mobile optimization",
          "1 round of revisions"
        ]
      },
      {
        name: "Advanced",
        price: "$999",
        features: [
          "Advanced optimization",
          "Caching setup",
          "CDN integration",
          "Security audit",
          "Load balancing",
          "3 rounds of revisions"
        ]
      },
      {
        name: "Premium",
        price: "Custom",
        features: [
          "Enterprise optimization",
          "Custom server setup",
          "Database optimization",
          "24/7 monitoring",
          "Monthly maintenance",
          "Unlimited support"
        ]
      }
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offering a comprehensive range of digital solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{service.timeline}</span>
                </div>
                <div className="space-y-2">
                  {service.process.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-card p-8 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="text-3xl font-bold mb-6">{selectedService.title}</h2>
              <p className="text-muted-foreground mb-8">{selectedService.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedService.tiers.map((tier, index) => (
                  <div
                    key={tier.name}
                    className="border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                    <p className="text-2xl font-bold mb-4">{tier.price}</p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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