import React from 'react';
import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logoImg from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <img src={logoImg} alt="Augustina" className="h-10 w-auto" />
              </Link>
              <p className="text-gray-600 mb-6">
                Committed to innovation that leads to a green future. We provide innovative & commercially viable solutions for sustainable energy.
              </p>
              <div className="flex space-x-4">
                <Link className="text-gray-400 hover:text-primary-600 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </Link>
                <Link className="text-gray-400 hover:text-primary-600 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </Link>
                <Link className="text-gray-400 hover:text-primary-600 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['About Us', 'Services', 'Products', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h3>
              <ul className="space-y-4">
                {[
                  'Free Consultancy',
                  'Optimised Solutions',
                  'Biomass Equipment',
                  'Project Revival',
                  'Installation Services'
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <HiLocationMarker className="w-6 h-6 text-primary-600 mt-1" />
                  <p className="text-gray-600">
                    415-A, Kapadia Compound, Vasta Devdi Road, Katargam, Surat- 395004
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <HiPhone className="w-5 h-5 text-primary-600" />
                  <a href="tel:9998835511" className="text-gray-600 hover:text-primary-600 transition-colors">
                    +91 9998835511
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <HiMail className="w-5 h-5 text-primary-600" />
                  <a href="mailto:enquiry@augustina.in" className="text-gray-600 hover:text-primary-600 transition-colors">
                    enquiry@augustina.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <HiClock className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600">
                    Mon - Sat 10.00 AM - 8.00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 text-center md:flex md:justify-between md:text-left">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Augustina Tradelink Pvt Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-primary-600 transition-colors mx-4">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors mx-4">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;