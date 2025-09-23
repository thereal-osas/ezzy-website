import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Download } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showFinalGreeting, setShowFinalGreeting] = useState(false);

  const greetings = [
    "You don chow?",
    "Se o ti jeun?",
    "I riela nri?",
    "Kun ci abinci?",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGreeting((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          setShowFinalGreeting(true);
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-orange-100">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-orange rounded-full opacity-20 hidden md:block"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}

        {/* Mobile-friendly smaller particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`mobile-${i}`}
            className="absolute w-1 h-1 bg-primary-orange rounded-full opacity-30 md:hidden"
            initial={{
              x: Math.random() * 300,
              y: Math.random() * 600,
            }}
            animate={{
              x: Math.random() * 300,
              y: Math.random() * 600,
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-orange-300 rounded-full opacity-40"
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Image Placeholder - Hero Illustration (Mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-2 border-dashed border-orange-300 flex items-center justify-center mb-8 lg:hidden"
            >
              <div className="text-center text-orange-600">
                <div className="text-4xl mb-2">🎨</div>
                <p className="text-sm font-medium">Hero Illustration</p>
                <p className="text-xs opacity-75">
                  Interactive visual elements
                </p>
              </div>
            </motion.div>

            {/* Sequential Greeting Animation */}
            <div className="mb-6 h-32 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {greetings
                  .slice(0, currentGreeting + 1)
                  .map((greeting, index) => (
                    <motion.p
                      key={`${greeting}-${index}`}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      className="text-lg text-gray-600 mb-2"
                    >
                      {greeting}
                    </motion.p>
                  ))}
              </AnimatePresence>

              {showFinalGreeting && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                    damping: 10,
                    delay: 0.5,
                  }}
                  className="text-2xl font-bold text-primary-orange mt-4"
                >
                  Have you eaten?
                </motion.p>
              )}
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Everything You Need{" "}
              <span className="text-primary-orange">Delivered with Ease</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Download Ezzy and experience seamless delivery, quick rides, and
              convenient rentals - all in one app.
            </motion.p>

            {/* App Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download className="h-5 w-5 mr-2 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download on Google Play</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Smartphone className="h-5 w-5 mr-2 relative z-10 group-hover:animate-pulse" />
                <span className="relative z-10">Download on App Store</span>
              </motion.a>
            </motion.div>

            {/* Promo Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8 p-4 bg-primary-orange bg-opacity-10 rounded-lg border border-primary-orange border-opacity-20"
            >
              <p className="text-primary-orange font-semibold">
                Get ₦500 off your first service when you use this promo code:{" "}
                <span className="font-bold">EZZY500</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Image Placeholder - Main Hero Visual (Desktop) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl border-2 border-dashed border-orange-300 flex items-center justify-center shadow-2xl"
              >
                <div className="text-center text-orange-600">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-lg font-medium mb-2">
                    App Interface Mockup
                  </p>
                  <p className="text-sm opacity-75 max-w-xs">
                    Interactive app demonstration and service showcase will be
                    displayed here
                  </p>
                </div>
              </motion.div>

              {/* Image Placeholder - Secondary Visual Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl border border-dashed border-orange-400 flex items-center justify-center"
              >
                <div className="text-center text-orange-700">
                  <div className="text-2xl">🚀</div>
                  <p className="text-xs">Feature</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl border border-dashed border-orange-400 flex items-center justify-center"
              >
                <div className="text-center text-orange-700">
                  <div className="text-xl">⭐</div>
                  <p className="text-xs">Rating</p>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-orange rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
