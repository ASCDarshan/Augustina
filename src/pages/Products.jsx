import { motion } from 'framer-motion';
import { HiChevronRight, HiOutlineInformationCircle } from 'react-icons/hi';
import firstImg from "../assets/images/product one.png"
import secondImg from "../assets/images/product two.jpg"
import thirdImg from "../assets/images/three.jpg"
import fourthImg from "../assets/images/four.jpg"
import fifthImg from "../assets/images/five.png"
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "HEAVY DUTY SHREDDER",
    image: firstImg,
    highlights: [
      "Advanced shredding technology",
      "High throughput capacity",
      "Robust construction",
      "Energy efficient operation"
    ],
    description: "Industrial-grade shredder designed for efficient biomass waste processing with superior durability and performance."
  },
  {
    id: 2,
    name: "HEAVY DUTY SECONDARY SHREDDER",
    image: secondImg,
    highlights: [
      "Fine particle size control",
      "Consistent output quality",
      "Low maintenance design",
      "Automated operation"
    ],
    description: "Secondary processing unit for achieving precise particle sizes in biomass material preparation."
  },
  {
    id: 3,
    name: "DEWATERING PRESS UNIT",
    image: thirdImg,
    highlights: [
      "High moisture removal efficiency",
      "Continuous operation capability",
      "Adjustable pressure control",
      "Integrated filtration system"
    ],
    description: "Advanced dewatering system for efficient moisture reduction in biomass materials."
  },
  {
    id: 4,
    name: "THERMO DRYER",
    image: fourthImg,
    highlights: [
      "Precise temperature control",
      "Energy-efficient design",
      "Multiple drying zones",
      "Automatic moisture monitoring"
    ],
    description: "State-of-the-art thermal drying solution for optimal moisture content in processed biomass."
  },
  {
    id: 5,
    name: "BIO COMPACTOR",
    image: fifthImg,
    highlights: [
      "High compression ratio",
      "Uniform density output",
      "Easy maintenance access",
      "Advanced control system"
    ],
    description: "Advanced biomass compaction system for producing high-quality fuel briquettes."
  }
];
const Products = () => {
  const navigate = useNavigate();

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
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced biomass processing equipment engineered for efficiency and sustainability
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group h-full flex flex-col"
              >
                <div className="relative w-full h-64 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6 flex-grow">
                    {product.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start text-gray-700">
                        <HiChevronRight className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="ml-2 line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Learn More
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <HiOutlineInformationCircle className="w-6 h-6 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-600">
              Detailed specifications and performance metrics of our equipment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Need Technical Support?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our expert team is ready to help you with installation, maintenance, and troubleshooting.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Contact Support
                </motion.button>
              </div>
              {/* <div className="relative h-64 md:h-full">
                <img
                  src={technicalSupportImage}
                  alt="Technical Support"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;