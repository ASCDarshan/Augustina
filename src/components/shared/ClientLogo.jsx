import React from 'react';
import { motion } from 'framer-motion';

const ClientLogo = ({ name, logo, testimonial }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="p-6">
          <div className="h-32 flex items-center justify-center">
            <img
              src={logo}
              alt={name}
              className="max-h-24 w-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
            />
          </div>
          {testimonial && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-600 italic text-sm line-clamp-3">
                "{testimonial}"
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </motion.div>
  );
};

export default ClientLogo;