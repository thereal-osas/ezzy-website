import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Car, Home } from "lucide-react";
import serviceImage from "../assets/delivery-service1.jpg";

const ServiceCategories = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: "Delicious meals delivered",
      description:
        "Fresh, hot meals from your favorite restaurants and local eateries, delivered straight to your door.",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-custom-dark-secondary",
      iconColor: "text-orange-400",
    },
    {
      icon: ShoppingBag,
      title: "Shop essentials and more",
      description:
        "Everything you need from groceries to household items, electronics, and daily essentials delivered fast.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-custom-dark-secondary",
      iconColor: "text-blue-400",
    },
    {
      icon: Car,
      title: "Quick rides and deliveries",
      description:
        "Fast, reliable transportation and same-day delivery services to get you and your items where they need to be.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-custom-dark-secondary",
      iconColor: "text-green-400",
    },
    {
      icon: Home,
      title: "Convenient rentals made easy",
      description:
        "Rent equipment, tools, vehicles, and more for short or long-term use with flexible booking options.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-custom-dark-secondary",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <section className="py-20 bg-custom-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-orange rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What's on Deck?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Try the everything app.
          </p>

          {/* Service Overview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={serviceImage}
              alt="Service Categories Overview"
              className="w-full h-full object-cover"
            />
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
                  boxShadow:
                    "0 25px 50px rgba(255,107,53,0.25), 0 0 30px rgba(255,107,53,0.1)",
                }}
                className="group cursor-pointer"
              >
                <div
                  className={`${service.bgColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl border border-custom-dark-tertiary relative overflow-hidden backdrop-blur-sm`}
                >
                  {/* Enhanced Animated Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-orange via-orange-500 to-orange-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1.8, rotate: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
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
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-center leading-relaxed">
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
