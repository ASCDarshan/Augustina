import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb, HiOutlineCog, HiOutlineRefresh } from 'react-icons/hi';

const services = [
  {
    icon: <HiOutlineLightBulb className="w-8 h-8" />,
    title: "Free Consultancy",
    description: "Expert guidance and analysis for your biomass projects with no upfront costs. Our team provides comprehensive evaluations and recommendations.",
    features: [
      "Initial assessment",
      "Feasibility study",
      "ROI analysis",
      "Technical recommendations"
    ]
  },
  {
    icon: <HiOutlineCog className="w-8 h-8" />,
    title: "Optimised Solutions",
    description: "We design and implement the most efficient solutions for your specific biomass waste processing needs.",
    features: [
      "Custom system design",
      "Process optimization",
      "Energy efficiency analysis",
      "Production capacity planning"
    ]
  },
  {
    icon: <HiOutlineRefresh className="w-8 h-8" />,
    title: "Project Revival",
    description: "Specialized services to modify and revive non-functional biomass projects, bringing them back to optimal performance.",
    features: [
      "System assessment",
      "Equipment upgrade",
      "Process optimization",
      "Performance enhancement"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a thorough assessment of your biomass waste processing needs."
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Our team develops a customized solution tailored to your specific requirements."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Expert installation and setup of your biomass processing equipment."
  },
  {
    number: "04",
    title: "Support & Maintenance",
    description: "Ongoing technical support and maintenance services to ensure optimal performance."
  }
];
const Services = () => {

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive biomass waste solutions from consultation to implementation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to implementing effective biomass solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                  <span className="text-4xl font-bold text-primary-200 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-primary-200 transform translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Biomass Waste?
                </h2>
                <p className="text-primary-100 mb-6">
                  Contact us today to discuss your project and discover how we can help you achieve your sustainability goals.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
              <div className="relative h-64 md:h-full">
                {/* <img
                  src="/images/biomass-plant.jpg"
                  alt="Biomass Processing Plant"
                  className="w-full h-full object-cover rounded-xl"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;