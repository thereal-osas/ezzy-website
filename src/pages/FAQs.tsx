import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "General",
      question: "What is Ezzy and what services do you offer?",
      answer:
        "Ezzy is a comprehensive platform offering food delivery, shopping, quick rides, and convenient rentals. We connect you with everything you need through one easy-to-use app.",
    },
    {
      category: "Delivery",
      question: "How long does delivery usually take?",
      answer:
        "Most deliveries are completed within 30-45 minutes. However, delivery times may vary based on distance, weather conditions, and order volume. You can track your order in real-time through our app.",
    },
    {
      category: "Pricing",
      question: "What are the delivery fees?",
      answer:
        "Delivery fees start from ₦200 and vary based on distance and order value. Orders above ₦5,000 qualify for free delivery in most areas. Ride and rental pricing varies by service type and duration.",
    },
    {
      category: "Tracking",
      question: "Can I track my order or ride in real-time?",
      answer:
        "Yes! Once your order is confirmed or ride is booked, you can track everything in real-time through our app. You'll receive notifications at every step of the process.",
    },
    {
      category: "Payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept cash on delivery, bank transfers, card payments, mobile money, and digital wallets. All online payments are secured with bank-level encryption.",
    },
    {
      category: "Support",
      question: "What if my order is incorrect or damaged?",
      answer:
        "If there's any issue with your order, please contact our customer support immediately through the app or call our 24/7 helpline. We'll either send a replacement or provide a full refund.",
    },
    {
      category: "Service Hours",
      question: "Do you operate 24/7?",
      answer:
        "Our service hours vary by location and service type. Most restaurants deliver until 11 PM, while some convenience stores and pharmacies offer 24/7 service. Rides and rentals have varying availability.",
    },
    {
      category: "Business",
      question: "How can I become a vendor or partner with Ezzy?",
      answer:
        "Visit our vendor portal or contact our business development team through the 'Vendors' page. We'll guide you through the onboarding process and help set up your business on our platform.",
    },
    {
      category: "Orders",
      question: "Is there a minimum order amount?",
      answer:
        "Minimum order amounts vary by vendor and service type, typically ranging from ₦1,000 to ₦2,500. This information is displayed on each vendor's page before you place an order.",
    },
    {
      category: "Rentals",
      question: "How do rentals work on Ezzy?",
      answer:
        "Browse available rental items, select your rental period, make payment, and arrange pickup or delivery. All rental items are verified and insured. Return instructions will be provided with your rental.",
    },
    {
      category: "Rides",
      question: "What types of rides are available?",
      answer:
        "We offer various ride options including economy, comfort, and premium vehicles. You can also book rides for deliveries, airport transfers, and scheduled trips.",
    },
    {
      category: "Account",
      question: "How do I create an account or reset my password?",
      answer:
        "Download the Ezzy app and sign up with your phone number or email. For password resets, use the 'Forgot Password' option on the login screen, and we'll send you a reset link.",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-custom-dark via-custom-dark-secondary to-custom-dark-tertiary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <HelpCircle className="w-8 h-8" />
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about Ezzy's services
            </p>

            {/* Image Placeholder - FAQ Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md mx-auto h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-2 border-dashed border-orange-300 flex items-center justify-center mb-8"
            >
              <div className="text-center text-orange-600">
                <div className="text-3xl mb-1">💡</div>
                <p className="text-sm font-medium">FAQ Illustration</p>
                <p className="text-xs opacity-75">Helpful visual guides</p>
              </div>
            </motion.div>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 bg-custom-dark border-b border-custom-dark-tertiary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-custom-dark-secondary text-gray-300 rounded-full hover:bg-primary-orange hover:text-white transition-all duration-300 border border-custom-dark-tertiary"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-custom-dark relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-custom-dark-secondary rounded-2xl overflow-hidden border border-custom-dark-tertiary backdrop-blur-sm"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "#f3f4f6" }}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center">
                    <span className="bg-primary-orange text-white text-xs px-2 py-1 rounded-full mr-4">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary-orange" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                No FAQs found matching your search.
              </p>
            </motion.div>
          )}

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-8">
              Our customer support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255,107,53,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-orange text-primary-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-orange hover:text-white transition-all duration-300"
              >
                Live Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
