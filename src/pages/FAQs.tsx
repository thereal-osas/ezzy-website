import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Vendor Issues",
      question: "Can I get a refund if the vendor is unreachable?",
      answer:
        "Yes, you're entitled to a full refund if the vendor cannot fulfill your order. Refunds are processed within 24-72 hours depending on your payment method. We'll notify you once it's processed.",
    },
    {
      category: "Rider Delays",
      question: "Why is my rider taking so long to deliver?",
      answer:
        "We sincerely apologize for the delay. Riders may be affected by traffic congestion, weather conditions, or high order volume. We're tracking the rider and will update you shortly.",
    },
    {
      category: "Rider Delays",
      question: "What if the food arrives cold due to the delay?",
      answer:
        "We're truly sorry if your meal arrives cold. Please report it immediately and we'll offer a refund, reorder, or voucher depending on the situation.",
    },
    {
      category: "Ride Cancellations",
      question: "I cancelled my ride — will I be charged?",
      answer:
        "If the cancellation occurred after a driver was assigned or en route, a small cancellation fee may apply. This helps compensate the driver for time and fuel.",
    },
    {
      category: "Ride Cancellations",
      question: "I cancelled because the driver was delayed — will I still be charged?",
      answer:
        "If the driver was significantly delayed or unresponsive, you should not be charged. Please report the issue and we'll investigate immediately.",
    },
    {
      category: "Order Refunds",
      question: "How long does it take to get my refund?",
      answer:
        "Refunds typically take 24-72 business hours. Wallet refunds reflect instantly. Bank or card refunds may take longer depending on your financial institution.",
    },
    {
      category: "Order Refunds",
      question: "I cancelled by mistake can I reverse it and still get my order?",
      answer:
        "If the cancellation was recent and the order has not been processed, We will be able to reinstate it. Please contact support immediately for further assistance.",
    },
    {
      category: "Order Refunds",
      question: "Can I get a voucher instead of a refund?",
      answer:
        "Yes, if you prefer a voucher for future use. We can issue one immediately. Just let us know and we'll process it right away.",
    },
    {
      category: "Rental Safety",
      question: "How do I know if a rental listing is fake?",
      answer:
        "Warning signs include unusually low prices, vague descriptions, requests for upfront payments without inspection, or refusal to meet in person. Always verify before making any payment.",
    },
    {
      category: "Rental Safety",
      question: "How can I protect myself from fake listings?",
      answer:
        "Always inspect the property in person, avoid paying before viewing, and meet in public places. Use vendors with 'Instant Confirmation' tags. Enable notifications for real-time updates. We're also improving vendor vetting.",
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
                  whileHover={{ backgroundColor: "rgba(255, 107, 53, 0.1)" }}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none transition-colors duration-200"
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
