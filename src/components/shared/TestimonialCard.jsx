import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const TestimonialCard = ({ testimonial, isCompact = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-4 ring-primary-500/20" />
        </div>
        <div className="flex-1">
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="w-5 h-5 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      <blockquote className={`text-gray-700 italic ${isCompact ? 'text-sm' : 'text-base'} mb-4 flex-1`}>
        "{testimonial.text}"
      </blockquote>

      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-primary-600 text-sm">{testimonial.position}</p>
      </div>

    </motion.div>
  );
};

export default TestimonialCard;