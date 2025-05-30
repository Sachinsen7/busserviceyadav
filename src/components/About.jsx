import { motion } from "framer-motion";
import { useState } from "react";
import BookingInquiryForm from "./BookingInquiryForm.jsx";

import BusOne from "../assets/BusOne.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" },
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = () => {
    setSelectedService({
      name: "General Booking",
      type: "general",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-raleway bg-white mt-9">
      <main className="flex-grow">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-24 text-white flex items-center justify-center"
        >
          <div className="absolute inset-0 " />
          <div className="relative text-center">
            <h1 className="text-4xl font-bold font-raleway mb-2 text-secondary mt-5">
              About Yadav Bus Services
            </h1>
            <p className="text-lg text-neutralDark">
              Your trusted partner for seamless travel across India.
            </p>
          </div>
        </motion.section>

        {/* Company History */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="w-full mx-auto py-10 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className=" text-4xl font-bold text-center text-primary-blue  mb-6">
              Our Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-gray-900">
                  Founded in 2020, Yadav Bus Services started with a vision to
                  redefine bus travel in India. From a single route in
                  Rajasthan, we’ve grown to serve thousands of passengers across
                  multiple cities, offering comfort, reliability, and
                  affordability.
                </p>
                <p className="text-gray-900 mt-4">
                  Our commitment to customer satisfaction and innovation has
                  made us a preferred choice for travelers seeking hassle-free
                  journeys.
                </p>
              </div>
              <img
                src={BusOne}
                alt="Yadav Bus Fleet"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.section>

        <section className="max-w-7xl mx-auto">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="w-full mx-auto py-10 px-4"
          >
            <h2 className="text-2xl font-bold text-center text-neutralDark mb-6">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Amit Yadav",
                  role: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Priya Sharma",
                  role: "Operations Manager",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Ravi Patel",
                  role: "Customer Support Lead",
                  image: "https://randomuser.me/api/portraits/men/65.jpg",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  style={{
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)",
                  }}
                  className="rounded-lg shadow-md p-4 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover"
                  />
                  <h3 className="text-lg font-bold text-primary-blue mt-4">
                    {member.name}
                  </h3>
                  <p className="text-neutralDark">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="w-full mx-auto py-10 px-4 text-center"
          >
            <h2 className="text-2xl font-bold text-primary-blue mb-4">
              Ready to Travel with Us?
            </h2>
            <p className="text-neutralDark mb-6">
              Join thousands of happy travelers and book your next journey
              today!
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

export default About;
