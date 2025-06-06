import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BookingInquiryForm from "../components/BookingInquiryForm.jsx";
import { useState } from "react";

// Animation variants for hotel cards and container
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const HotelService = () => {
  // State for modal visibility and selected hotel
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Handle "Book Now" button click
  const handleBookNow = (hotel) => {
    setSelectedService(hotel);
    setIsModalOpen(true);
  };

  // List of available hotels
  const hotels = [
    {
      name: "Standard Hotel",
      rating: "3-Star",
      pricePerNight: "₹3,500/night",
      image:
        "https://i.pinimg.com/736x/b6/aa/91/b6aa915a8af1139561f0b9ec24a2e5af.jpg",
    },
    {
      name: "Deluxe Hotel",
      rating: "4-Star",
      pricePerNight: "₹6,000/night",
      image:
        "https://i.pinimg.com/736x/4c/0f/5a/4c0f5a2f375f605ef43ca3234aff05cf.jpg",
    },
    {
      name: "Luxury Hotel",
      rating: "5-Star",
      pricePerNight: "₹10,000/night",
      image:
        "https://i.pinimg.com/736x/33/12/bb/3312bb0de6aefca33db6f724c3c34f91.jpg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-raleway ">
      {/* Page heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold text-primary-blue mb-8 text-center"
      >
        Hotel Service - Choose Your Stay
      </motion.h1>

      {/* Hotel cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Render each hotel card */}
        {hotels.map((hotel, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="p-6 rounded-lg shadow-md"
          >
            <img
              src={hotel.image}
              alt={`${hotel.name} (${hotel.rating})`}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-extrabold text-primary-blue mb-2">
              {hotel.name}
            </h2>
            <p className="text-neutral-gray font-bold mb-2">
              <strong>Rating:</strong> {hotel.rating}
            </p>
            <p className="text-neutral-gray font-bold mb-4">
              <strong>Price:</strong> {hotel.pricePerNight}
            </p>
            {/* Book Now button */}
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <button
                onClick={() => handleBookNow(hotel)}
                className="inline-block bg-accent text-neutralDark px-4 py-2 rounded-lg font-semibold text-base hover:bg-primary-blue    transition-colors"
                aria-label={`Book ${hotel.name} (${hotel.rating})`}
              >
                Book Now
              </button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Back to Home button */}
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

      {/* Booking inquiry modal */}
      {selectedService && (
        <BookingInquiryForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceType="Hotel"
          serviceName={`${selectedService.name} (${selectedService.rating})`}
        />
      )}
    </div>
  );
};

export default HotelService;