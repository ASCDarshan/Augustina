import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: "Adhyashakti Green Solutions",
      position: "Our Client",
      image: "/images/testimonials/adhyashakti.png",
      text: "Augustina consistently provides high-quality equipment and services that exceed customer expectations."
    },
    {
      name: "Ajil Biofuel Sdn. Bhd",
      position: "Our Client",
      image: "/images/testimonials/ajil.png",
      text: "Augustina has built a compatible environment and collaborations with suppliers, which makes it easy to do business with."
    },
    {
      name: "Avi Renewables",
      position: "Our Client",
      image: "/images/testimonials/avi.png",
      text: "Augustina is creating a powerful shift towards green future by reducing the over reliance of fossil fuels."
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses who have transformed their operations with our solutions
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div ref={ref} className="relative">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Client Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 relative">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover rounded-full"
                        />
                        <div className="absolute inset-0 rounded-full ring-4 ring-primary-500/20" />
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(5)].map((_, i) => (
                          <HiStar key={i} className="w-6 h-6 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                        "{testimonials[currentIndex].text}"
                      </blockquote>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-primary-600">
                          {testimonials[currentIndex].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 md:-mx-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <HiChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <HiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-500' : 'bg-primary-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;