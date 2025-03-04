import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import logoImg from "../../assets/images/logo.png"

const navMenu = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="bg-primary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:9998835511" className="flex items-center hover:text-primary-200 transition-colors">
                <HiPhone className="w-4 h-4 mr-2" />
                <span>+91 9998835511</span>
              </a>
              <a href="mailto:enquiry@augustina.in" className="flex items-center hover:text-primary-200 transition-colors">
                <HiMail className="w-4 h-4 mr-2" />
                <span>enquiry@augustina.in</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <span className="text-primary-200">Mon - Sat 10.00 AM - 8.00 PM</span>
              <div className="flex items-center space-x-3">
                <Link className="hover:text-primary-200 transition-colors">
                  <FaFacebook className="w-4 h-4" />
                </Link>
                <Link className="hover:text-primary-200 transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <motion.img
                src={logoImg}
                alt="Augustina"
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navMenu.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors"
              >
                Get Started
              </motion.button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navMenu.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button className="w-full mt-4 bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;