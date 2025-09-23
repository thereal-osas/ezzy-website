import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        "About",
        "Careers",
        "FAQs",
        "Blog",
        "Contact",
        "Terms of Use",
        "Privacy Policy",
      ],
    },
    {
      title: "Customers",
      links: ["Chowpass", "Relay", "Storefront", "Documentation"],
    },
    {
      title: "Vendors",
      links: ["Join our network", "Vendor portal", "Support"],
    },
    {
      title: "Riders",
      links: ["Become a rider", "Rider app", "Support"],
    },
  ];

  const cuisines = [
    "Pasta near me",
    "Rice near me",
    "Fast food near me",
    "Asian food in Lagos",
    "African food in Lagos",
    "Breakfast menu in Lagos",
    "Fitfam stores in Lagos",
    "American food in Lagos",
    "Pastries in Lagos",
    "Salad in Lagos",
    "Fruits in Lagos",
  ];

  const popularLocations = [
    "Food delivery",
    "Surulere",
    "Ogudu",
    "Yaba",
    "Ikeja",
    "Lekki",
    "King Glab",
    "Korede Spaghetti",
    "Iyan Aladuke",
    "Food Fusion",
    "Belefull",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary-orange">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Cuisines Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <h3 className="text-lg font-semibold mb-4 text-primary-orange">
            Cuisines near you
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {cuisines.map((cuisine) => (
              <a
                key={cuisine}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {cuisine}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Popular Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <h3 className="text-lg font-semibold mb-4 text-primary-orange">
            Popular
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {popularLocations.map((location) => (
              <a
                key={location}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {location}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex space-x-6 mb-4 md:mb-0"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-primary-orange transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-orange transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-orange transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-orange transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © All Rights Reserved. 2025 Ezzy Technologies
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
