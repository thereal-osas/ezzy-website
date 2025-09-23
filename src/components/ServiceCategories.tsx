import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Car, Home } from "lucide-react";

const ServiceCategories = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: "Delicious meals delivered",
      description:
        "Fresh, hot meals from your favorite restaurants and local eateries, delivered straight to your door.",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: ShoppingBag,
      title: "Shop essentials and more",
      description:
        "Everything you need from groceries to household items, electronics, and daily essentials delivered fast.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Car,
      title: "Quick rides and deliveries",
      description:
        "Fast, reliable transportation and same-day delivery services to get you and your items where they need to be.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Home,
      title: "Convenient rentals made easy",
      description:
        "Rent equipment, tools, vehicles, and more for short or long-term use with flexible booking options.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
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
            What's on Deck?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Try the everything app.
          </p>

          {/* Image Placeholder - Service Overview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-2 border-dashed border-orange-300 flex items-center justify-center"
          >
            <div className="text-center text-orange-600">
              <div className="text-5xl mb-3">🚀</div>
              <p className="text-lg font-medium">Service Categories Overview</p>
              <p className="text-sm opacity-75">
                Interactive service demonstration and feature highlights
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255,107,53,0.15)",
                }}
                className="group cursor-pointer"
              >
                <div
                  className={`${service.bgColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl border border-gray-100 relative overflow-hidden`}
                >
                  {/* Animated Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-orange to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1.5, rotate: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.2,
                      y: -5,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    }}
                    className={`w-16 h-16 ${service.iconColor} mb-6 mx-auto relative z-10`}
                  >
                    <IconComponent className="w-full h-full drop-shadow-lg" />
                    {/* Pulse Effect */}
                    <motion.div
                      className={`absolute inset-0 ${service.iconColor} opacity-20 rounded-full`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Gradient */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`h-1 bg-gradient-to-r ${service.color} mt-6 rounded-full origin-left`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg"
          >
            Explore All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;
