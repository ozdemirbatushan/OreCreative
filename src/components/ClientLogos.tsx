import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clients = [
    {
      name: 'Tech Corp',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80',
    },
    {
      name: 'Innovation Labs',
      logo: 'https://images.unsplash.com/photo-1599305446868-59e861c26d41?auto=format&fit=crop&w=200&h=100&q=80',
    },
    {
      name: 'Future Systems',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80',
    },
    {
      name: 'Global Solutions',
      logo: 'https://images.unsplash.com/photo-1599305446868-59e861c26d41?auto=format&fit=crop&w=200&h=100&q=80',
    },
    {
      name: 'Digital Ventures',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80',
    },
    {
      name: 'Smart Tech',
      logo: 'https://images.unsplash.com/photo-1599305446868-59e861c26d41?auto=format&fit=crop&w=200&h=100&q=80',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprises run on Ore Creative
          </h2>
          <p className="text-xl text-gray-600">
            Companies that have transformed their digital presence with us
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;