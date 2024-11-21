import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Digital Marketing in 2024',
      excerpt: 'Explore the latest trends and predictions for digital marketing strategies in the coming year.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      date: 'Mar 15, 2024',
      author: 'Emily Davis',
      category: 'Digital Marketing',
    },
    {
      title: 'Building Responsive Websites: Best Practices',
      excerpt: 'Learn the essential techniques for creating websites that look great on any device.',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800',
      date: 'Mar 12, 2024',
      author: 'Michael Chen',
      category: 'Web Development',
    },
    {
      title: 'Maximizing ROI with Email Marketing',
      excerpt: 'Discover proven strategies to improve your email marketing campaigns and boost conversions.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
      date: 'Mar 10, 2024',
      author: 'Sarah Johnson',
      category: 'Email Marketing',
    },
    {
      title: 'Mobile App Development Trends',
      excerpt: 'Stay ahead of the curve with these emerging trends in mobile app development.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800',
      date: 'Mar 8, 2024',
      author: 'John Smith',
      category: 'Mobile Development',
    },
    {
      title: 'SEO Strategies That Actually Work',
      excerpt: 'Learn effective SEO techniques that will help your website rank higher in search results.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800',
      date: 'Mar 5, 2024',
      author: 'Emily Davis',
      category: 'SEO',
    },
    {
      title: 'Creating Engaging Content for Social Media',
      excerpt: 'Tips and tricks for creating content that resonates with your social media audience.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800',
      date: 'Mar 3, 2024',
      author: 'Sarah Johnson',
      category: 'Social Media',
    },
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
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Insights, tips, and trends from our digital experts
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;