import { motion } from "framer-motion";
import { Target, Users, Globe, Award } from "lucide-react";

const Company = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Active Users" },
    { icon: Globe, number: "50+", label: "Cities Covered" },
    { icon: Target, number: "99.9%", label: "Delivery Success Rate" },
    { icon: Award, number: "4.8/5", label: "Customer Rating" },
  ];

  return (
    <section id="company" className="py-20 bg-white">
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
            About Ezzy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how you access everything you need - from
            delicious meals and daily essentials to quick rides and convenient
            rentals, all in one seamless platform.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with the vision of simplifying everyday life, Ezzy has
              evolved from a simple delivery service to a comprehensive platform
              offering meals, shopping, rides, and rentals - all designed to
              make your life easier.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that everything you need should be accessible with just
              a few taps, delivered with reliability and convenience that
              exceeds expectations.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl p-8 text-white"
          >
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-lg opacity-90">
              To revolutionize everyday convenience by providing seamless access
              to meals, essentials, transportation, and rentals through one
              unified platform that brings communities together.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Company;
