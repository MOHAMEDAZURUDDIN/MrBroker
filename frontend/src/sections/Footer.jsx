import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Mr. Brokers
            </h2>
            <p className="mt-4 text-gray-400">
              Your trusted partner in finding the perfect property.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <ul className="space-y-2 sm:space-y-0 sm:flex sm:space-x-6">
              <li>
                <Link className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              <Link  className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </Link>
              <Link className="text-gray-400 hover:text-white">
                <FaTwitter />
              </Link>
              <Link className="text-gray-400 hover:text-white">
                <FaInstagram />
              </Link>
              <Link className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; 2024 Mr. Brokers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
