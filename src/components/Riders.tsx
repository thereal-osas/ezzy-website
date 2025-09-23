import { motion } from "framer-motion";
import { Bike, Clock, DollarSign, Star, MapPin, Shield } from "lucide-react";

const Riders = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Earnings",
      description: "Earn up to ₦50,000 monthly with flexible working hours",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work when you want, where you want. You control your time",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage for all our riders",
    },
    {
      icon: Star,
      title: "Performance Bonuses",
      description: "Extra rewards for excellent service and customer ratings",
    },
    {
      icon: MapPin,
      title: "GPS Navigation",
      description: "Advanced GPS system to help you find the fastest routes",
    },
    {
      icon: Bike,
      title: "Equipment Support",
      description: "We provide delivery bags and equipment maintenance",
    },
  ];

  return (
    <section id="riders" className="py-20 bg-gray-50">
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
            Join the Ezzy Rider Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become part of our elite team and start earning while providing
            essential services - from deliveries to rides - across the city.
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-orange to-orange-600 rounded-3xl p-8 lg:p-12 text-white text-center mb-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Earning?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of riders who are already earning with Ezzy
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-orange px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mb-6"
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Requirements to Join
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Basic Requirements:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Valid driver's license or ID</li>
                <li>• Own motorcycle or bicycle</li>
                <li>• Smartphone with internet access</li>
                <li>• Age 18 years and above</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Preferred Qualifications:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Previous delivery experience</li>
                <li>• Good knowledge of local area</li>
                <li>• Excellent customer service skills</li>
                <li>• Reliable and punctual</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Riders;
