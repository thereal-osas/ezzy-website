import { motion } from "framer-motion";
import { Mail, Download, Smartphone } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-custom-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Cool stuff only
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </div>

            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 mt-4 font-medium"
              >
                Thank you for subscribing! 🎉
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-orange to-orange-600 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Place your order in seconds
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Download the Ezzy app and start ordering now
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="https://dev.ezzymarket.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Download className="h-5 w-5 mr-2" />
              Download on Google Play
            </motion.a>
            <motion.a
              href="https://dev.ezzymarket.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Download on App Store
            </motion.a>
          </div>

          {/* Promo Code Highlight */}
        </motion.div>

        {/* Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stories</h3>
          <p className="text-gray-300">
            No stories at the moment, check again later!
          </p>
        </motion.div>

        {/* FAQs Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://dev.ezzymarket.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-custom-dark-secondary text-primary-orange px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 border border-custom-dark-tertiary hover:border-primary-orange/50"
          >
            FAQs.
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
