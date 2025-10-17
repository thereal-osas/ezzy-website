import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-custom-dark shadow-2xl border-b border-custom-dark-secondary sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold text-primary-orange cursor-pointer"
              >
                Ezzy
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/company">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-300 hover:text-primary-orange transition-colors duration-200 ${
                  location.pathname === "/company"
                    ? "text-primary-orange font-semibold"
                    : ""
                }`}
              >
                Company
              </motion.div>
            </Link>
            <Link to="/vendors">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-300 hover:text-primary-orange transition-colors duration-200 ${
                  location.pathname === "/vendors"
                    ? "text-primary-orange font-semibold"
                    : ""
                }`}
              >
                Vendors
              </motion.div>
            </Link>
            <Link to="/riders">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-300 hover:text-primary-orange transition-colors duration-200 ${
                  location.pathname === "/riders"
                    ? "text-primary-orange font-semibold"
                    : ""
                }`}
              >
                Riders
              </motion.div>
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-300 hover:text-primary-orange transition-colors duration-200 ${
                  location.pathname === "/contact"
                    ? "text-primary-orange font-semibold"
                    : ""
                }`}
              >
                Contact Us
              </motion.div>
            </Link>
            <Link to="/faqs">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-300 hover:text-primary-orange transition-colors duration-200 ${
                  location.pathname === "/faqs"
                    ? "text-primary-orange font-semibold"
                    : ""
                }`}
              >
                FAQs
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-primary-orange transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-custom-dark border-t border-custom-dark-secondary"
          >
            <div className="px-4 py-4 space-y-4">
              <a
                href="#"
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                Company
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                Vendors
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                Riders
              </a>

              <a
                href="#"
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                FAQs
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
