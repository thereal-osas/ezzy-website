import { motion } from "framer-motion";
import {
  Store,
  TrendingUp,
  Users,
  Clock,
  Shield,
  Smartphone,
} from "lucide-react";
import vendorImage from "../assets/vendor.jpg";

const Vendors = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Your Revenue",
      description:
        "Reach more customers and boost your sales with our extensive user base and marketing support.",
    },
    {
      icon: Users,
      title: "Expand Your Reach",
      description:
        "Connect with thousands of potential customers in your area and beyond.",
    },
    {
      icon: Clock,
      title: "Easy Management",
      description:
        "Simple dashboard to manage orders, inventory, and customer interactions efficiently.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Fast, secure payment processing with multiple payment options for your customers.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description:
        "Manage your business on-the-go with our intuitive mobile vendor app.",
    },
    {
      icon: Store,
      title: "Brand Visibility",
      description:
        "Showcase your products and services to a wider audience with professional listings.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description:
        "Fill out our simple vendor application form with your business details.",
    },
    {
      number: "02",
      title: "Verification",
      description:
        "Our team will verify your business credentials and documentation.",
    },
    {
      number: "03",
      title: "Setup & Training",
      description:
        "Get onboarded with our platform and receive training on how to maximize your success.",
    },
    {
      number: "04",
      title: "Go Live",
      description:
        "Start receiving orders and growing your business with Ezzy!",
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
              Partner with <span className="text-primary-orange">Ezzy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of successful vendors who are growing their
              business with our platform. From restaurants to retail stores, we
              help you reach more customers and increase your revenue.
            </p>

            {/* Vendor Success Stories Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-3xl mx-auto h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-2xl"
            >
              <img
                src={vendorImage}
                alt="Vendor Success Stories"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,107,53,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300"
            >
              Become a Vendor
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Ezzy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide everything you need to succeed in the digital
              marketplace
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

      {/* How It Works */}
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
              How to Get Started
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our platform in just four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Join thousands of successful vendors on Ezzy and start reaching
              more customers today.
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

export default Vendors;
