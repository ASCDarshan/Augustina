import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiDownload, HiMail } from 'react-icons/hi';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 my-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <HiX className="w-6 h-6 text-gray-500" />
              </button>

              <div className="p-6">
                {/* Product Images */}
                <div className="relative h-64 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Product Info */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p>{product.description}</p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                    <HiDownload className="w-5 h-5 mr-2" />
                    Download Brochure
                  </button>
                  <button className="flex items-center px-6 py-2 border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                    <HiMail className="w-5 h-5 mr-2" />
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;