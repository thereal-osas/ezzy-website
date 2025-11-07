import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
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

            {/* Shopping Cart Button - Capsule Design */}
            <a
              href="https://dev.ezzymarket.com/shopping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Capsule Button with Enhanced 3D Depth - Pure CSS */}
                <div className="cart-button-3d relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-primary-orange to-orange-600 rounded-full transition-all duration-300">
                  <ShoppingCart className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold text-sm">
                    Add to cart
                  </span>

                  {/* Discount Badge - Smaller and Repositioned */}
                  <div className="absolute -top-1 -right-3 bg-yellow-400 text-custom-dark rounded-full w-9 h-9 flex items-center justify-center shadow-lg transform rotate-12">
                    <div className="text-center">
                      <p className="text-[7px] font-bold leading-none">Save</p>
                      <p className="text-[11px] font-bold leading-none mt-0.5">10%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          </div>

          {/* Mobile cart icon and menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Shopping Cart Button - Capsule Design */}
            <a
              href="https://dev.ezzymarket.com/shopping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Compact Capsule Button for Mobile with Enhanced 3D Depth - Pure CSS */}
                <div className="cart-button-3d-mobile relative flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-500 via-primary-orange to-orange-600 rounded-full transition-all duration-300">
                  <ShoppingCart className="h-4 w-4 text-white" />
                  <span className="text-white font-semibold text-xs">
                    Cart
                  </span>

                  {/* Discount Badge - Smaller and Repositioned for Mobile */}
                  <div className="absolute -top-0.5 -right-2 bg-yellow-400 text-custom-dark rounded-full w-7 h-7 flex items-center justify-center shadow-lg transform rotate-12">
                    <div className="text-center">
                      <p className="text-[6px] font-bold leading-none">Save</p>
                      <p className="text-[9px] font-bold leading-none mt-0.5">10%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>

            {/* Mobile menu button */}
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
              <Link
                to="/company"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                Company
              </Link>
              <Link
                to="/vendors"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                Vendors
              </Link>
              <Link
                to="/riders"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                Riders
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/faqs"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-primary-orange transition-colors duration-200"
              >
                FAQs
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
