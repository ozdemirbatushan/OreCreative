import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Ore Creative</h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-6 h-6 mr-3 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-gray-400" />
                </div>
                <a
                  href="mailto:info@orecreative.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@orecreative.com
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 mr-3 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-gray-400" />
                </div>
                <a
                  href="tel:+16092248592"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (609) 224-8592
                </a>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 mr-3 flex items-center justify-center mt-1">
                  <MapPin className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-gray-400">
                  Hasanpaşa, Söğütlüçeşme Caddesi No:184 34722 Kadıkoy/Istabul
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ore Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;