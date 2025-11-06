import { motion } from "framer-motion";
import { FileText, Calendar } from "lucide-react";

const TermsOfUse = () => {
  const sections = [
    {
      number: "1",
      title: "Acceptance of Terms",
      content:
        "By registering, accessing, or using Ezzy's services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the services.",
    },
    {
      number: "2",
      title: "Use of Services",
      content:
        "You agree to use our platform only for lawful purposes. You may not misuse the services, interfere with their operation, or engage in fraudulent activity.",
    },
    {
      number: "3",
      title: "Accounts & Security",
      content:
        "You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account. Notify us immediately of any unauthorized use.",
    },
    {
      number: "4",
      title: "Payments",
      content:
        "Payments for services must be made through approved methods. All transactions are subject to verification and compliance with applicable laws.",
    },
    {
      number: "5",
      title: "Cancellations & Refunds",
      content:
        "Policies for cancellations, refunds, and modifications may vary depending on the service type (e.g., food delivery, rides, hotel bookings). Please review service- specific policies during checkout.",
    },
    {
      number: "6",
      title: "Limitation of Liability",
      content:
        "Ezzy is not liable for indirect, incidental, or consequential damages arising from the use of our services, except as required by Nigerian law.",
    },
    {
      number: "7",
      title: "Termination",
      content:
        "We may suspend or terminate your account if you violate these Terms, engage in fraud, or misuse the platform."
    },
    {
      number: "8",
      title: "Governing Law",
      content:
        "These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.",
    },
  
    
  ];

  return (
    <div className="pt-16 min-h-screen bg-custom-dark">
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mr-4"
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-6">
             Welcome to Ezzy! These Terms and Conditions govern your use of our platform and services, which include food delivery, ride-hailing, fashion retail, and hotel bookings. By accessing or using Ezzy, you agree to these Terms.
            </p>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center text-primary-orange"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                Last updated: 19 August 2025
              </span>
            </motion.div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-custom-dark-secondary rounded-2xl p-6 lg:p-8 border border-custom-dark-tertiary hover:border-primary-orange/30 transition-colors"
              >
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
                  {section.number}. {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-primary-orange/10 border-2 border-primary-orange rounded-2xl"
          >
            <p className="text-gray-300 text-center">
              By continuing to use Ezzy's services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms and
              Conditions. If you have any questions, please{" "}
              <a
                href="/contact"
                className="text-primary-orange hover:text-orange-400 font-semibold transition-colors"
              >
                contact us
              </a>
              .
            </p>
          </motion.div>

          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <a
              href="/"
              className="text-primary-orange hover:text-orange-400 font-medium transition-colors"
            >
              ← Back to Home
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;

