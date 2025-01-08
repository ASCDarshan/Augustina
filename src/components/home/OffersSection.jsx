import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineCurrencyDollar, HiOutlineClock, HiOutlineScale } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const OffersSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const offers = [
    {
      icon: <HiOutlineCurrencyDollar className="w-8 h-8" />,
      title: "CONVERT YOUR BIOMASS WASTE TO BRIQUETTE",
      price: "US$06.00 PER MT",
      description: "WE PROVIDE EQUIPMENTS TO CONVERT YOUR BIOMASS WASTE TO BRIQUETTES",
      buttonText: "Contact Us",
      image: "/images/briquette-conversion.jpg",
      highlight: "Most Popular"
    },
    {
      icon: <HiOutlineClock className="w-8 h-8" />,
      title: "EQUIPMENTS ON LEASE",
      price: "Starting from $2000/month",
      description: "WE PROVIDE EQUIPMENTS TO CONVERT YOUR BIOMASS WASTE TO BRIQUETTES ON LEASE",
      buttonText: "Get Details",
      image: "/images/equipment-lease.jpg"
    },
    {
      icon: <HiOutlineScale className="w-8 h-8" />,
      title: "BUILD-OWN-OPERATE-TRANSFER (B.O.O.T)",
      price: "Custom Solutions",
      description: "WE PROVIDE EQUIPMENTS ON BOOT BASIS",
      buttonText: "Learn More",
      image: "/images/boot-model.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Offers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect solution for your biomass waste conversion needs
          </p>
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-primary-500/40" />
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Highlight Badge */}
              {offer.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {offer.highlight}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {offer.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>

                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {offer.price}
                </div>

                <p className="text-gray-600 mb-6">
                  {offer.description}
                </p>

                {/* Terms and Contact Button */}
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 mb-4">
                    Terms and conditions apply
                  </p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                    >
                      {offer.buttonText}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-secondary-600 transition-colors"
            >
              Contact Our Experts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;