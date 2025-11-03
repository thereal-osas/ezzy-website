import { motion } from "framer-motion";
import heroVideo from "../assets/ezzy-hero2.mp4";
import { Zap, Star } from "lucide-react";
// import { useState, useEffect } from "react";

const Hero = () => {
  // const [currentGreeting, setCurrentGreeting] = useState(0);
  // const [showFinalGreeting, setShowFinalGreeting] = useState(false);

  // const greetings = [
  //   "You don chow?",
  //   "Se o ti jeun?",
  //   "I riela nri?",
  //   "Kun ci abinci?",
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentGreeting((prev) => {
  //       if (prev < greetings.length - 1) {
  //         return prev + 1;
  //       } else {
  //         setShowFinalGreeting(true);
  //         clearInterval(timer);
  //         return prev;
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-dark via-custom-dark-secondary to-custom-dark-tertiary">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 via-transparent to-primary-orange/10"></div>
        {/* Radial Gradient */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Floating Particles and Animations */}
      <div className="absolute inset-0">
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
            {/* Sequential Greeting Animation */}
            {/* <div className="mb-6 h-32 flex flex-col justify-center">
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
                      className="text-lg text-gray-300 mb-2"
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
            </div> */}

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Everything You Need{" "}
              <span className="bg-gradient-to-r from-primary-orange via-orange-500 to-orange-600 bg-clip-text text-transparent animate-glow">
                Delivered with Ease
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Experience seamless delivery, quick rides, and convenient rentals
              - all in one platform. Start ordering now!
            </motion.p>

            {/* Order Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.a
                href="https://dev.ezzymarket.com"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(255,107,53,0.4)",
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center bg-primary-orange text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 relative overflow-hidden font-bold text-lg"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Order Now</span>
              </motion.a>
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
              {/* Hero Video - Main Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full h-[30rem] rounded-3xl overflow-hidden shadow-2xl"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={heroVideo}
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>

              {/* Feature Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-center text-white">
                  <Zap className="w-10 h-10 mx-auto mb-1" />
                  <p className="text-xs font-semibold">Fast</p>
                </div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-center text-white">
                  <Star className="w-8 h-8 mx-auto mb-1 fill-white" />
                  <p className="text-xs font-bold">4.8</p>
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
