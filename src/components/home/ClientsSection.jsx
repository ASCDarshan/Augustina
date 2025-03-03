import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ClientOne from "../../assets/images/Daystar Pvt. Ltd.png";
import ClientTwo from "../../assets/images/Adhyashakti Green Solutions.png";
import ClientThree from "../../assets/images/Ajil Biofuel.png";

const clients = [
  {
    name: "Daystar Pvt. Ltd",
    logo: ClientOne,
  },
  {
    name: "Adhyashakti Green Solutions",
    logo: ClientTwo,
  },
  {
    name: "Ajil Biofuel Sdn. Bhd",
    logo: ClientThree,
  },
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "21+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "3", label: "Countries Served" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const ClientsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Trusted Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We're proud to work with industry leaders who trust our innovative
            solutions
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl p-8"
            >
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <div className="flex items-center justify-center w-full h-full bg-gray-50 rounded-lg p-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                {client.name}
              </h3>
              <div className="w-12 h-1 bg-primary-500 mx-auto rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl font-bold text-primary-600 mb-2">
                {stat.number}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-8">
            Join our growing list of satisfied clients
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-y-0 right-1/2 w-screen bg-gradient-to-r from-primary-50 to-primary-100 blur-3xl" />
        <div className="absolute inset-y-0 right-1/2 w-screen bg-gradient-to-r from-secondary-50 to-secondary-100 blur-3xl" />
      </div>
    </section>
  );
};

export default ClientsSection;
