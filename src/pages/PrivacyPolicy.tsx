import { motion } from "framer-motion";
import { Shield, Calendar } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      number: "1",
      title: "Information We Collect",
      content:
        "We collect information that you provide directly, information collected automatically when you use the Services, and information from third parties.",
    },
    {
      number: "2",
      title: "How We Use Your Information",
      content:
        "Provide and operate the Services: process orders, rides, returns, refunds, and hotel bookings.Personalize experiences: recommendations for food, rides, fashion items, and stays; saved addresses and preferences.Safety, security, and integrity: identity verification, fraud detection, preventing spam or abuse, and enforcing our Terms. Payments and accounting: charge, refund, and reconcile transactions. Communications: send order updates, ride status, promotional messages (with consent where required), and service announcements. Research and product improvement: analytics, testing, troubleshooting, and new features. Legal compliance: responding to lawful requests, tax obligations, KYC/AML checks where applicable.",
    },
    {
      number: "3",
      title: "Information Sharing",
      content:
        "We share your information with service providers (restaurants, drivers, vendors), payment processors, and business partners necessary to fulfill your orders. We do not sell your personal information to third parties.",
    },
    {
      number: "4",
      title: "Data Security",
      content:
        "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.",
    },
    {
      number: "5",
      title: "Location Data",
      content:
        "We collect location data to provide delivery and ride-hailing services, show nearby restaurants and services, and improve our platform. You can control location permissions through your device settings.",
    },
    {
      number: "6",
      title: "Cookies and Tracking",
      content:
        "We use cookies and similar technologies to enhance your experience, remember your preferences, analyze usage patterns, and deliver personalized content. You can manage cookie preferences in your browser settings.",
    },
    {
      number: "7",
      title: "Third-Party Services",
      content:
        "Our platform may integrate with third-party services such as payment gateways, analytics providers, and social media platforms. These services have their own privacy policies that govern their use of your information.",
    },
    {
      number: "8",
      title: "Your Rights",
      content:
        "You have the right to access, update, or delete your personal information, opt-out of marketing communications, request data portability, and withdraw consent for data processing. Contact us to exercise these rights.",
    },
    {
      number: "9",
      title: "Data Retention",
      content:
        "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your account and data at any time.",
    },
    {
      number: "10",
      title: "Children's Privacy",
      content:
        "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
    },
    {
      number: "11",
      title: "International Data Transfers",
      content:
        "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.",
    },
    {
      number: "12",
      title: "Marketing Communications",
      content:
        "We may send you promotional emails, push notifications, and SMS messages about our services, special offers, and updates. You can opt-out of marketing communications at any time through your account settings or unsubscribe links.",
    },
    {
      number: "13",
      title: "Changes to Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or through the platform.",
    },
    {
      number: "14",
      title: "Contact Us",
      content:
        "If you have questions about this Privacy Policy or how we handle your data, please contact our Data Protection Officer at privacy@ezzymarket.com or through our customer support channels.",
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
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-6">
              This Privacy Policy explains how Ezzy Technologies Ltd. ("Ezzy", "we", "us", or "our") collects, uses, shares, and protects your information when you use our website, mobile apps, products, and services (collectively, the "Services"). Our Services cover multiple e‑commerce experiences similar to food delivery, ride‑hailing, online fashion retail, and hotel bookings. <br /> By using our Services, you agree to this Policy and our Terms of Service. If you do not agree, please do not use the Services. <br /> <i>Compliance: We aim to comply with applicable Nigerian data protection laws (including the Nigeria Data Protection Act 2023 and the NDPR 2019, as amended), and other laws where relevant.</i>
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

          {/* Privacy Sections */}
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
              Your privacy is important to us. By using Ezzy's services, you
              acknowledge that you have read and understood this Privacy Policy.
              For any privacy-related concerns, please{" "}
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

export default PrivacyPolicy;

