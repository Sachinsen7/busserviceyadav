import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BookingInquiryForm from "../components/BookingInquiryForm.jsx";
import { useState } from "react";

// Animatiopn part

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const BusService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const buses = [
    {
      name: "Mini Bus",
      seating: "20 Seater",
      pricePerKm: "₹32/km",
      image:
        "https://i.pinimg.com/736x/a2/f7/41/a2f741dba80999d6b5da41e8584bf766.jpg",
    },
    {
      name: "Mid-Size Bus",
      seating: "30 Seater",
      pricePerKm: "₹45/km",
      image:
        "https://i.pinimg.com/736x/9b/8e/a0/9b8ea053b25177c34d75d42b61548787.jpg",
    },
    {
      name: "Luxury Coach",
      seating: "40 Seater",
      pricePerKm: "₹60/km",
      image:
        "https://i.pinimg.com/736x/36/d3/9d/36d39d5d452cf955af699a6c10e18b42.jpg",
    },
  ];

  const handleBookNow = (bus) => {
    setSelectedService(bus);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-raleway bg-ai-gradient-section">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold text-primary-blue mb-8 text-center"
      >
        Bus Service - Choose Your Ride
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {buses.map((bus, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-ai-gradient-card p-6 rounded-lg shadow-md"
          >
            <img
              src={bus.image}
              alt={`${bus.name} vehicle`}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-extrabold text-primary-blue mb-2">
              {bus.name}
            </h2>
            <p className="text-neutral-gray font-bold mb-2">
              <strong>Seating:</strong> {bus.seating}
            </p>
            <p className="text-neutral-gray font-bold mb-4">
              <strong>Price:</strong> {bus.pricePerKm}
            </p>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <button
                onClick={() => handleBookNow(bus)}
                className="inline-block bg-accent text-neutralDark px-4 py-2 rounded-lg font-semibold text-base hover:bg-primary-blue hover:text-white transition-colors"
                aria-label={`Book ${bus.name} bus`}
              >
                Book Now
              </button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-secondary text-white  px-4 py-2 rounded-lg font-extrabold text-base transition-colors"
        >
          <Link to="/home" aria-label="Back to Home">
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* inquiry model  */}

      {selectedService && (
        <BookingInquiryForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceType="Bus"
          serviceName={selectedService.name}
        />
      )}
    </div>
  );
};

export default BusService;
