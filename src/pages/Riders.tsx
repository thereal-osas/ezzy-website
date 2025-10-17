import { motion } from "framer-motion";
import { Bike, Clock, DollarSign, Star, MapPin, Shield } from "lucide-react";

const Riders = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Earnings",
      description:
        "Earn up to ₦80,000 monthly with flexible working hours and multiple service options",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Work when you want, where you want. You control your time and availability",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description:
        "Comprehensive insurance coverage for all our riders and their vehicles",
    },
    {
      icon: Star,
      title: "Performance Bonuses",
      description:
        "Extra rewards for excellent service, customer ratings, and consistent performance",
    },
    {
      icon: MapPin,
      title: "Smart Navigation",
      description:
        "Advanced GPS system and route optimization to help you work more efficiently",
    },
    {
      icon: Bike,
      title: "Equipment Support",
      description:
        "We provide delivery bags, safety equipment, and vehicle maintenance support",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-custom-dark via-custom-dark-secondary to-custom-dark-tertiary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Join the <span className="text-primary-orange">Ezzy</span> Rider
              Network
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Become part of our elite team and start earning while providing
              essential services - from deliveries to rides - across the city.
            </p>

            {/* Image Placeholder - Rider Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-3xl mx-auto h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-2 border-dashed border-orange-300 flex items-center justify-center mb-8"
            >
              <div className="text-center text-orange-600">
                <div className="text-4xl mb-2">🏍️</div>
                <p className="text-lg font-medium">Rider Community</p>
                <p className="text-sm opacity-75">
                  Active riders and success stories showcase
                </p>
              </div>
            </motion.div>
            <motion.a
              href="https://dev.ezzymarket.com"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,107,53,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300"
            >
              Apply to Become a Rider
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Earning Potential */}
      <section className="py-20 bg-custom-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-orange to-orange-600 rounded-3xl p-8 lg:p-12 text-white text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of riders who are already earning with Ezzy
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">₦80K+</div>
                <div className="text-lg opacity-90">Monthly Potential</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Flexible Hours</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-lg opacity-90">Rider Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Ride with Ezzy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide everything you need to succeed as a rider
            </p>
          </motion.div>

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
                  className="bg-custom-dark-secondary rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-custom-dark-tertiary backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mb-6"
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-custom-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Requirements to Join
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple requirements to get started with Ezzy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-custom-dark-secondary rounded-2xl p-8 shadow-sm max-w-4xl mx-auto border border-custom-dark-tertiary backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Basic Requirements:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Valid driver's license or ID
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Own motorcycle, bicycle, or vehicle
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Smartphone with internet access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Age 18 years and above
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Basic English communication skills
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Preferred Qualifications:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Previous delivery or ride experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Good knowledge of local area
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Excellent customer service skills
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Reliable and punctual
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                    Professional appearance and attitude
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Join the Ezzy family and start earning while making a difference
              in your community.
            </p>
            <motion.a
              href="https://dev.ezzymarket.com"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-custom-dark-secondary text-primary-orange px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 border border-custom-dark-tertiary hover:border-primary-orange/50"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Riders;
