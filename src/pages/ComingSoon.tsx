import { motion } from "framer-motion";
import { Rocket, Bell, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";

const ComingSoon = () => {
  const location = useLocation();
  const serviceName = location.state?.serviceName || "This Feature";

  return (
    <div className="pt-16 min-h-screen bg-custom-dark">
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-orange rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Rocket Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-block mb-8"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-32 h-32 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Rocket className="w-16 h-16 text-white" />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Coming Soon
            </motion.h1>

            {/* Service Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-primary-orange/20 border-2 border-primary-orange rounded-full text-primary-orange font-semibold text-xl">
                {serviceName}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              We're working hard to bring you something amazing! {serviceName} is
              currently under development and will be launching soon. Stay tuned
              for updates.
            </motion.p>

            {/* Features Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-custom-dark-secondary rounded-2xl p-6 border border-custom-dark-tertiary">
                <Bell className="w-10 h-10 text-primary-orange mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Get Notified</h3>
                <p className="text-gray-400 text-sm">
                  Be the first to know when we launch
                </p>
              </div>
              <div className="bg-custom-dark-secondary rounded-2xl p-6 border border-custom-dark-tertiary">
                <Rocket className="w-10 h-10 text-primary-orange mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Exciting Features
                </h3>
                <p className="text-gray-400 text-sm">
                  Innovative solutions coming your way
                </p>
              </div>
              <div className="bg-custom-dark-secondary rounded-2xl p-6 border border-custom-dark-tertiary">
                <Mail className="w-10 h-10 text-primary-orange mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm">
                  Subscribe for exclusive updates
                </p>
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-md mx-auto"
            >
              <h3 className="text-white text-lg font-semibold mb-4">
                Get Early Access
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-custom-dark-secondary border border-custom-dark-tertiary rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-orange transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                >
                  Notify Me
                </motion.button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                We'll never share your email with anyone else.
              </p>
            </motion.div>

            {/* Back to Home Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12"
            >
              <a
                href="/"
                className="text-primary-orange hover:text-orange-400 font-medium transition-colors"
              >
                ← Back to Home
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;

