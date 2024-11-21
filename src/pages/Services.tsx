import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2, Globe, PenTool, Smartphone, Mail,
  ChevronDown, ChevronUp, Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const services = [
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Social Media Management',
      description: 'Strategic social media solutions to build your brand and engage your audience.',
      details: [
        'Target Audience Analysis - In-depth analysis of your ideal customer demographics',
        'Content Planning and Creation - Strategic content aligned with your brand voice',
        'Ad Management - Optimized social media advertising campaigns',
        'Analytics and Performance Tracking - Detailed reporting and insights'
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Design and Development',
      description: 'Custom websites that convert visitors into customers.',
      details: [
        'User-Friendly Website Design - Intuitive interfaces for better engagement',
        'Responsive Mobile Design - Perfect display across all devices',
        'E-commerce Solutions - Full-featured online stores',
        'Search Engine Optimization (SEO) - Improved search visibility'
      ]
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Content Creation',
      description: 'Engaging content that tells your story and connects with your audience.',
      details: [
        'Social Media Visual Content - Eye-catching graphics and images',
        'Logo and Brand Identity Design - Distinctive visual branding',
        'Video Production and Editing - Professional video content',
        'Podcast Production and Distribution - End-to-end audio solutions'
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications that deliver exceptional user experiences.',
      details: [
        'Custom Mobile App Development - Native and cross-platform solutions',
        'App UI/UX Design - Intuitive and engaging interfaces',
        'App Store Optimization (ASO) - Improved visibility',
        'Comprehensive App Testing - Quality assurance',
        'In-depth App Analytics - Usage and performance tracking'
      ]
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Marketing',
      description: 'Strategic email campaigns that nurture leads and drive conversions.',
      details: [
        'Newsletter Design and Distribution - Engaging email campaigns',
        'Email Performance Analytics - Detailed tracking and reporting',
        'Custom Professional Email Signatures - Brand consistency',
        'Corporate Email Configuration - Security and spam prevention'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Comprehensive digital solutions tailored to help your business thrive in the modern digital landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenService(openService === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="text-purple-600 mr-4">{service.icon}</div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                  {openService === index ? (
                    <ChevronUp className="h-6 w-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-purple-600" />
                  )}
                </button>
                <AnimatePresence>
                  {openService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="px-6 py-4 bg-gray-50">
                        <ul className="space-y-3">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-2 mr-3" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Started
              <Send className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;