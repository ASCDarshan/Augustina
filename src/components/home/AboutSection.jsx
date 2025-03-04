import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import missionImg from "../../assets/images/SUSTAINABLE.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stats = [
  { number: "21+", label: "Projects Completed" },
  { number: "15+", label: "Team Members" },
  { number: "2+", label: "Facilities" },
  { number: "20M", label: "Tonnes Target" },
];

const AboutSection = () => {

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
              15-YEARS OF SUSTAINABLE & INNOVATIVE TECHNOLOGIES
            </h2>
            <p className="text-gray-600 mb-6">
              Augustina Tradelink Pvt. Ltd is engaged in engineering, designing,
              fabricating, and supplying renewable technologies to convert
              biomass waste into combustible fuel and gases.
            </p>
            <p className="text-gray-600 mb-6">
              Having strong teamwork and in-depth research, we have created new
              concepts and means to treat biomass waste. Our innovative and
              power-efficient systems help in generating briquettes, pellets,
              power, and combustible gases.
            </p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-4 bg-primary-50 rounded-lg"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-600">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={missionImg}
                alt="Sustainable Technology"
                className="w-full h-90 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs"
            >
              <h4 className="text-xl font-semibold text-primary-600 mb-2">
                Our Mission
              </h4>
              <p className="text-gray-600 text-sm">
                To process and convert 20 million tonnes of biomass waste into
                reusable fuel.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
