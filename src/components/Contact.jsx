import { motion } from "framer-motion";
import { useState } from "react";
import BookingInquiryForm from "./BookingInquiryForm";

// Animation variants for section and input fields
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const inputVariants = {
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

const Contact = () => {
  // State for modal visibility and selected service
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Handle "Book Now" button click
  const handleBookNow = () => {
    setSelectedService({
      name: "General Booking",
      type: "general",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-raleway bg-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="relative text-white flex items-center justify-center "
        >
          <div className="relative text-center h-24 mt-7">
            <h1 className="text-4xl font-bold mb-2 text-secondary">
              Get in Touch
            </h1>
            <p className="text-lg text-neutralDark">
              We’re here to assist you with all your travel needs.
            </p>
          </div>
        </motion.section>

        {/* Contact Form and Details Section */}
        <section className="max-w-7xl gap-4 mx-auto py-10 px-4">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="w-full mx-auto py-10 px-4 "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-neutralDark mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-4">
                  <motion.div variants={inputVariants} whileHover="hover">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-[#4B5563]  rounded text-[#4B5563]"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileHover="hover">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-[#4B5563] rounded text-[#4B5563]"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileHover="hover">
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      className="w-full p-3 border border-[#4B5563] rounded text-[#4B5563]"
                    />
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#F59E0B" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-accent text-white p-3 rounded "
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-neutralDark mb-6">
                  Contact Information
                </h2>
                <p className="text-neutralDark mb-4">
                  <strong>Email:</strong> info@yadavbus.com
                </p>
                <p className="text-neutralDark mb-4">
                  <strong>Phone:</strong> +91-123-456-7890
                </p>
                <p className="text-neutralDark mb-4">
                  <strong>Address:</strong> 123 Bus Lane, Jaipur, Rajasthan,
                  India
                </p>
                <p className="text-neutralDark">
                  Our team is available 24/7 to assist with bookings, inquiries,
                  or support.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Map Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="container mx-auto py-10 px-4"
          >
            <h2 className="text-2xl font-bold text-center text-primary-blue mb-6">
              Find Us
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.729192225293!2d75.7872709752952!3d26.912433976642146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b0b8f8a5d5%3A0x6e7c3a2b0b7a8f2!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yadav Bus Services Location"
              />
            </div>
          </motion.section>

          {/* Call-to-Action Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="bg-gray-300 mx-auto py-10 px-4  text-center"
          >
            <h2 className=" text-2xl font-bold text-primary-blue mb-4">
              Plan Your Next Trip
            </h2>
            <p className="text-neutralDark mb-6">
              Contact us to book your journey or explore our packages!
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <button
                onClick={handleBookNow}
                className="inline-block bg-accent text-neutralDark px-6 py-3 rounded-lg font-bold"
              >
                Book Now
              </button>
            </motion.div>
          </motion.section>
        </section>
      </main>
      {/* Booking inquiry modal */}
      {selectedService && (
        <BookingInquiryForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceType="general"
          serviceName={selectedService.name}
        />
      )}
    </div>
  );
};

export default Contact;