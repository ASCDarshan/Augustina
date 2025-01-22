import React from "react";
import { useParams } from "react-router-dom";
import firstImg from "../assets/images/product one.png"
import secondImg from "../assets/images/product two.jpg"
import thirdImg from "../assets/images/three.jpg"
import fourthImg from "../assets/images/four.jpg"
import fifthImg from "../assets/images/five.png"
import { Clock, Box, Gauge, Book } from "lucide-react";
import { motion } from 'framer-motion';

const productData = [
    {
        id: 1,
        name: "HEAVY DUTY SHREDDER",
        category: "Industrial Shredders",
        model: "HD-3000X",
        image: firstImg,
        highlights: [
            "Advanced shredding technology",
            "High throughput capacity",
            "Robust construction",
            "Energy efficient operation"
        ],
        description: "Industrial-grade shredder designed for efficient biomass waste processing with superior durability and performance.",
        specifications: {
            capacity: "3000 kg/hr",
            power: "75 kW",
            dimensions: "3200 x 1800 x 2400 mm",
            weight: "5200 kg",
            cutting_chamber: "1500 x 1200 mm",
            rotor_speed: "85 rpm",
            screen_size: "50-100 mm adjustable"
        },
        features: [
            "Hydraulic power transmission",
            "Automatic reverse function on overload",
            "Hardened steel cutting tools",
            "Touch screen control panel",
            "Remote monitoring capability",
            "Integrated cooling system"
        ],
        applications: [
            "Wood waste processing",
            "Biomass preparation",
            "Recycling plants",
            "Agricultural waste"
        ],
        maintenance_interval: "500 operating hours",
        warranty: "2 years standard warranty"
    },
    {
        id: 2,
        name: "HEAVY DUTY SECONDARY SHREDDER",
        category: "Secondary Processing",
        model: "SS-2000",
        image: secondImg,
        highlights: [
            "Fine particle size control",
            "Consistent output quality",
            "Low maintenance design",
            "Automated operation"
        ],
        description: "Secondary processing unit for achieving precise particle sizes in biomass material preparation.",
        specifications: {
            capacity: "2000 kg/hr",
            power: "55 kW",
            dimensions: "2800 x 1600 x 2200 mm",
            weight: "4200 kg",
            cutting_chamber: "1200 x 1000 mm",
            rotor_speed: "120 rpm",
            screen_size: "10-50 mm adjustable"
        },
        features: [
            "Precision cutting system",
            "Variable speed drive",
            "Self-sharpening cutters",
            "Automatic feed control",
            "Dust collection system",
            "Energy optimization system"
        ],
        applications: [
            "Fine material processing",
            "Pellet preparation",
            "Size reduction",
            "Uniform particle production"
        ],
        maintenance_interval: "400 operating hours",
        warranty: "2 years standard warranty"
    },
    {
        id: 3,
        name: "DEWATERING PRESS UNIT",
        category: "Moisture Control",
        model: "DPU-1500",
        image: thirdImg,
        highlights: [
            "High moisture removal efficiency",
            "Continuous operation capability",
            "Adjustable pressure control",
            "Integrated filtration system"
        ],
        description: "Advanced dewatering system for efficient moisture reduction in biomass materials.",
        specifications: {
            capacity: "1500 kg/hr",
            power: "45 kW",
            dimensions: "2500 x 1400 x 2000 mm",
            weight: "3800 kg",
            pressure: "Up to 300 bar",
            moisture_reduction: "Up to 60%",
            filtration: "Self-cleaning system"
        },
        features: [
            "Progressive cavity pump",
            "Automatic pressure regulation",
            "Stainless steel construction",
            "Digital moisture monitoring",
            "Continuous discharge system",
            "Advanced filtrate handling"
        ],
        applications: [
            "Organic waste dewatering",
            "Sludge processing",
            "Biomass preparation",
            "Industrial waste treatment"
        ],
        maintenance_interval: "300 operating hours",
        warranty: "2 years standard warranty"
    },
    {
        id: 4,
        name: "THERMO DRYER",
        category: "Thermal Processing",
        model: "TD-2500",
        image: fourthImg,
        highlights: [
            "Precise temperature control",
            "Energy-efficient design",
            "Multiple drying zones",
            "Automatic moisture monitoring"
        ],
        description: "State-of-the-art thermal drying solution for optimal moisture content in processed biomass.",
        specifications: {
            capacity: "2500 kg/hr",
            power: "90 kW",
            dimensions: "4000 x 2000 x 2500 mm",
            weight: "6500 kg",
            temperature_range: "30-150°C",
            heating_zones: "3 independent zones",
            moisture_reduction: "Up to 80%"
        },
        features: [
            "Multi-zone temperature control",
            "Heat recovery system",
            "Automatic moisture sensing",
            "Variable speed conveyor",
            "PLC control system",
            "Emergency cooling system"
        ],
        applications: [
            "Biomass drying",
            "Agricultural products",
            "Wood processing",
            "Industrial materials"
        ],
        maintenance_interval: "450 operating hours",
        warranty: "2 years standard warranty"
    },
    {
        id: 5,
        name: "BIO COMPACTOR",
        category: "Densification",
        model: "BC-1000",
        image: fifthImg,
        highlights: [
            "High compression ratio",
            "Uniform density output",
            "Easy maintenance access",
            "Advanced control system"
        ],
        description: "Advanced biomass compaction system for producing high-quality fuel briquettes.",
        specifications: {
            capacity: "1000 kg/hr",
            power: "60 kW",
            dimensions: "2800 x 1500 x 2200 mm",
            weight: "4800 kg",
            compression_ratio: "1:8",
            briquette_size: "90 mm diameter",
            density: "1.2 g/cm³"
        },
        features: [
            "Hydraulic compression system",
            "Automatic density control",
            "Quick-change die system",
            "Temperature monitoring",
            "Overload protection",
            "Production data logging"
        ],
        applications: [
            "Biomass briquetting",
            "Fuel production",
            "Waste volume reduction",
            "Material densification"
        ],
        maintenance_interval: "350 operating hours",
        warranty: "2 years standard warranty"
    }
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = productData.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="min-h-screen bg-neutral-50">
            <section className="relative bg-gradient-to-b from-primary-50 to-white py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {product.name}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {product.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-card border border-neutral-200 p-8 mb-12">
                    <header className="mb-8">
                        <div className="flex items-center space-x-2 text-sm text-primary-600 mb-4">
                            <span className="font-medium">{product.category}</span>
                        </div>
                        <div className="flex items-center justify-between space-x-6 text-neutral-600">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center mr-3">
                                    <Book className="w-5 h-5 text-neutral-500" />
                                </div>
                                <p className="font-medium text-neutral-800">Model: {product.model}</p>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                <span className="text-sm">
                                    Maintenance Interval: {product.maintenance_interval}
                                </span>
                            </div>
                        </div>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-8">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Technical Specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-neutral-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <div key={key} className="flex justify-between py-2 border-b border-neutral-200">
                                    <span className="font-medium capitalize">{key.replace(/_/g, ' ')}</span>
                                    <span>{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-neutral-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-bold mb-4">Features</h2>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <Box className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Applications */}
                    <div className="bg-neutral-50 p-6 rounded-xl mb-8">
                        <h2 className="text-2xl font-bold mb-4">Applications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {product.applications.map((application, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                    <Gauge className="w-6 h-6 text-primary-600 mb-2" />
                                    <span>{application}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Warranty Information */}
                    <div className="bg-primary-50 p-6 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4">Warranty Information</h2>
                        <p className="text-neutral-700">{product.warranty}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;