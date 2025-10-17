import { motion } from "framer-motion";
import { Store, Bike, Users, ArrowRight } from "lucide-react";

const BusinessPartnership = () => {
  const partnerships = [
    {
      icon: Store,
      title: "Join our growing network",
      subtitle: "Start selling",
      description:
        "Do you own a restaurant, store, or pharmacy? Join our network to reach new customers and grow your business with ease.",
      buttonText: "see more",
      bgColor: "bg-custom-dark-secondary",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
    {
      icon: Bike,
      title: "Deliver happiness",
      subtitle: "Join our elite league of delivery riders",
      description:
        "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
      buttonText: "see more",
      bgColor: "bg-custom-dark-secondary",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Users,
      title: "Behind the scenes",
      subtitle: "Join the team",
      description:
        "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
      buttonText: "see more",
      bgColor: "bg-custom-dark-secondary",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <section className="py-20 bg-custom-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partnership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => {
            const IconComponent = partnership.icon;
            return (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div
                  className={`${partnership.bgColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl border border-custom-dark-tertiary `}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 ${partnership.iconColor} mb-6`}
                  >
                    <IconComponent className="w-full h-full" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {partnership.title}
                  </h3>

                  {/* Subtitle */}
                  <h4 className="text-lg font-semibold text-primary-orange mb-4">
                    {partnership.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {partnership.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${partnership.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center group-hover:shadow-lg`}
                  >
                    {partnership.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessPartnership;
