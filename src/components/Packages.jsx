import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BookingInquiryForm from "./BookingInquiryForm.jsx";

const packageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

const Packages = () => {
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

  const packages = [
    {
      image:
        "https://images.unsplash.com/photo-1642993469336-6ed19a7ade57?q=80&w=3134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Jaipur City Tour",
      duration: "2 Days / 1 Night",
      price: "₹5,999",
      highlights: "Hawa Mahal, Amber Fort, City Palace",
    },
    {
      image:
        "https://images.unsplash.com/photo-1642993469336-6ed19a7ade57?q=80&w=3134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Golden Triangle",
      duration: "5 Days / 4 Nights",
      price: "₹15,999",
      highlights: "Delhi, Agra, Jaipur",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1697729683472-5e39cf4471ed?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Udaipur Lake Tour",
      duration: "3 Days / 2 Nights",
      price: "₹8,999",
      highlights: "Lake Pichola, City Palace, Jagdish Temple",
    },
  ];

  return (
    <section className="w-full mx-auto py-10 px-4  ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-primary-blue mb-8"
        >
          Tour Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={packageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)",
              }}
              className="rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary font-raleway">
                  {pkg.title}
                </h3>
                <p className="text-neutralDark mt-1">
                  Duration: {pkg.duration}
                </p>
                <p className="text-neutralDark">Price: {pkg.price}</p>
                <p className="text-neutralDark mt-2">
                  Highlights: {pkg.highlights}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handleBookNow}
                    className="inline-block bg-accent text-neutralDark px-4 py-2 rounded-lg font-semibold text-base transition-transform 
                    hover:scale-105"
                    aria-label={`Book ${pkg.title}`}
                  >
                    Book Now
                  </button>
                  <Link
                    to={`/tour-details/${encodeURIComponent(pkg.title)}`}
                    className="inline-block  text-neutralDark hover:underline px-4 py-2 rounded-lg font-semibold text-base hover:text-primary-blue transition-transform 
                    hover:scale-105"
                    aria-label={`Explore ${pkg.title}`}
                  >
                    Know more..
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <BookingInquiryForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceType="general"
          serviceName={selectedService.name}
        />
      )}
    </section>
  );
};

export default Packages;