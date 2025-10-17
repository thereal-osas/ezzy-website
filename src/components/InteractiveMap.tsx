import { motion } from "framer-motion";
import { MapPin, Star, Clock } from "lucide-react";
import { useState } from "react";

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      name: "King Glab",
      type: "Restaurant",
      rating: 4.8,
      deliveryTime: "25-35 min",
      position: { top: "20%", left: "30%" },
      cuisine: "African Cuisine",
    },
    {
      id: 2,
      name: "Korede Spaghetti",
      type: "Restaurant",
      rating: 4.6,
      deliveryTime: "20-30 min",
      position: { top: "40%", left: "60%" },
      cuisine: "Italian",
    },
    {
      id: 3,
      name: "Iyan Aladuke",
      type: "Restaurant",
      rating: 4.7,
      deliveryTime: "30-40 min",
      position: { top: "60%", left: "25%" },
      cuisine: "Traditional",
    },
    {
      id: 4,
      name: "Food Fusion",
      type: "Restaurant",
      rating: 4.5,
      deliveryTime: "15-25 min",
      position: { top: "35%", left: "80%" },
      cuisine: "Fusion",
    },
    {
      id: 5,
      name: "Belefull",
      type: "Restaurant",
      rating: 4.9,
      deliveryTime: "20-30 min",
      position: { top: "70%", left: "70%" },
      cuisine: "Local Delicacies",
    },
  ];

  return (
    <section className="py-20 bg-custom-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Click on any live location to order from restaurants near you
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover amazing restaurants in your area
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl h-96 lg:h-[500px] overflow-hidden shadow-xl"
        >
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          {/* Location Markers */}
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                top: location.position.top,
                left: location.position.left,
                transform: "translate(-50%, -50%)",
              }}
              className="cursor-pointer"
              onClick={() =>
                setSelectedLocation(
                  selectedLocation === location.id ? null : location.id
                )
              }
            >
              {/* Pulsing Ring */}
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary-orange rounded-full opacity-30"
              />

              {/* Marker */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center shadow-lg border-2 border-white"
              >
                <MapPin className="w-4 h-4 text-white" />
              </motion.div>

              {/* Info Card */}
              {selectedLocation === location.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-custom-dark-secondary rounded-lg shadow-xl p-4 min-w-48 border border-custom-dark-tertiary backdrop-blur-sm"
                >
                  <h3 className="font-bold text-white mb-1">{location.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    {location.cuisine}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{location.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{location.deliveryTime}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-3 bg-primary-orange text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
                  >
                    Order Now
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-custom-dark-secondary rounded-lg p-3 shadow-lg border border-custom-dark-tertiary backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
              <span className="text-sm font-medium text-gray-300">
                Restaurants
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-300">
            Click on any marker to see restaurant details and place your order
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMap;
