import { motion } from "framer-motion";
import { Download, Search, ShoppingCart, Package } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Download the app",
      description: "Get the Ezzy app from Google Play Store or Apple App Store",
    },
    {
      number: "02",
      icon: Search,
      title: "Explore categories",
      description:
        "Browse through restaurants, shops, pharmacies, and local markets",
    },
    {
      number: "03",
      icon: ShoppingCart,
      title: "Place your order",
      description: "Select your items, add to cart, and proceed to checkout",
    },
    {
      number: "04",
      icon: Package,
      title: "Unpack and enjoy",
      description:
        "Receive your order at your doorstep and enjoy your meal or items",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get started in 30
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to get your favorite food and essentials delivered
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative mb-6"
                >
                  <div className="w-20 h-20 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Connecting Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-primary-orange origin-left"
                      />
                    </div>
                  )}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 text-primary-orange mb-4 mx-auto"
                >
                  <IconComponent className="w-full h-full" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg"
          >
            Download App Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
