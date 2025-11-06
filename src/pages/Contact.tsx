import { motion } from "framer-motion";
import { Mail, Phone, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+234 800 123 4567",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: "support@ezzy.ng",
      description: "Send us an email anytime",
    },
    // {
    //   icon: MapPin,
    //   title: "Address",
    //   details: "123 Innovation Drive, Lagos, Nigeria",
    //   description: "Visit our headquarters",
    // },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Customer Support",
      description: "We're here when you need us",
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
              Get in <span className="text-primary-orange">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Have questions, feedback, or need support? We'd love to hear from
              you. Our team is here to help you with anything you need.
            </p>

            {/* Image Placeholder - Contact Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-2xl mx-auto h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-2 border-dashed border-orange-300 flex items-center justify-center"
            >
              <div className="text-center text-orange-600">
                <div className="text-4xl mb-2">📞</div>
                <p className="text-lg font-medium">Customer Support Team</p>
                <p className="text-sm opacity-75">
                  Friendly support representatives ready to help
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-custom-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-primary-orange font-semibold mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-custom-dark-tertiary bg-custom-dark-secondary text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-custom-dark-tertiary bg-custom-dark-secondary text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-custom-dark-tertiary bg-custom-dark-secondary text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-custom-dark-tertiary bg-custom-dark-secondary text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200">
                    <option>General Inquiry</option>
                    <option>Customer Support</option>
                    <option>Vendor Partnership</option>
                    <option>Rider Application</option>
                    <option>Technical Issue</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-custom-dark-tertiary bg-custom-dark-secondary text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(255,107,53,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-300 mb-6">
                  We're always excited to hear from our users, partners, and
                  community members. Whether you have a question, suggestion, or
                  just want to say hello, don't hesitate to reach out.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Support</h3>
                <p className="mb-6 opacity-90">
                  Need immediate assistance? Use our in-app chat feature or call
                  our 24/7 support line.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-custom-dark-secondary text-primary-orange px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center border border-custom-dark-tertiary hover:border-primary-orange/50"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Live Chat
                </motion.button>
              </div>

             

              <div className="bg-custom-dark-secondary rounded-2xl p-8 border border-custom-dark-tertiary backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM
                  </p>
                  <p>
                    <strong>Saturday:</strong> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> 10:00 AM - 4:00 PM
                  </p>
                  <p className="text-primary-orange font-semibold mt-4">
                    Customer Support: Available 24/7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
