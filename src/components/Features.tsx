import { motion } from "framer-motion";
import {
  Clock,
  Star,
  Leaf,
  Shield,
  ShoppingBag,
  Bell,
  Users,
  Headphones,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Quick and easy onboarding",
      description:
        "Get started in minutes with our simple registration process",
    },
    {
      icon: Star,
      title: "Quality meal choices",
      description: "Curated selection of the best restaurants and food options",
    },
    {
      icon: Leaf,
      title: "Fresh market picks",
      description: "Fresh produce and groceries from trusted local markets",
    },
    {
      icon: Shield,
      title: "Essential healthcare supplies",
      description: "Verified pharmacies with quality healthcare products",
    },
    {
      icon: ShoppingBag,
      title: "Quick-grab groceries",
      description: "Daily essentials and household items at your fingertips",
    },
    {
      icon: Bell,
      title: "Live updates on orders",
      description: "Real-time tracking from order placement to delivery",
    },
    {
      icon: Users,
      title: "Highly rated riders",
      description: "Professional delivery team committed to excellence",
    },
    {
      icon: Headphones,
      title: "24/7 support for customers and vendors",
      description: "Round-the-clock assistance whenever you need help",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
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
            Ezzy has you covered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What do you need? A quick ride? Last-minute delivery? Equipment
            rental? Daily essentials? Download Ezzy and let's deliver
            convenience to your doorstep in minutes.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(255,107,53,0.1)",
                }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 text-primary-orange mb-4"
                >
                  <IconComponent className="w-full h-full" />
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Scrolling Features Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-primary-orange rounded-2xl py-6"
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="flex items-center mx-8">
                <span className="text-white font-medium text-lg">
                  {feature.title}
                </span>
                <div className="w-2 h-2 bg-white rounded-full mx-6" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
