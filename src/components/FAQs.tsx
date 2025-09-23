import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does delivery usually take?",
      answer: "Most deliveries are completed within 30-45 minutes. However, delivery times may vary based on distance, weather conditions, and order volume."
    },
    {
      question: "What are the delivery fees?",
      answer: "Delivery fees start from ₦200 and vary based on distance and order value. Orders above ₦5,000 qualify for free delivery in most areas."
    },
    {
      question: "Can I track my order in real-time?",
      answer: "Yes! Once your order is confirmed, you can track your rider's location in real-time through our app. You'll receive notifications at every step of the delivery process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash on delivery, bank transfers, card payments, and mobile money. All online payments are secured with bank-level encryption."
    },
    {
      question: "What if my order is incorrect or damaged?",
      answer: "If there's any issue with your order, please contact our customer support immediately. We'll either send a replacement or provide a full refund."
    },
    {
      question: "Do you deliver 24/7?",
      answer: "Our delivery hours vary by location and vendor. Most restaurants deliver until 11 PM, while some convenience stores and pharmacies offer 24/7 service."
    },
    {
      question: "How can I become a vendor on Chowdeck?",
      answer: "Visit our vendor portal or contact our business development team. We'll guide you through the onboarding process and help set up your store on our platform."
    },
    {
      question: "Is there a minimum order amount?",
      answer: "Minimum order amounts vary by vendor, typically ranging from ₦1,000 to ₦2,500. This information is displayed on each vendor's page."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <HelpCircle className="w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our delivery service
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: '#f3f4f6' }}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
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
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Our customer support team is here to help you 24/7
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255,107,53,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
