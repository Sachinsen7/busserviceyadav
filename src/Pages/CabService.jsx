import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BookingInquiryForm from "../components/BookingInquiryForm";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const CabService = () => {
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);

  //handle function book now

  const handleBookNow = (vehicle) => {
    setSelectedService(vehicle);
    setIsModelOpen(true);
  };

  const vehicles = [
    {
      name: "Toyota Innova",
      seating: "7 Seater",
      pricePerKm: "₹17/km",
      image:
        "https://images.unsplash.com/photo-1647606655674-b93261ab40c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5ub3ZhfGVufDB8fDB8fHww",
    },
    {
      name: "Dzire",
      seating: "4 Seater",
      pricePerKm: "₹12/km",
      image:
        "https://imgs.search.brave.com/UeRs_JtQQlyRyQWM2tK9r7Sg0KAavJJ7_RwPayLGKaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy8xNzAxNzMv/ZHppcmUtZXh0ZXJp/b3ItcmlnaHQtZnJv/bnQtdGhyZWUtcXVh/cnRlci0yNy5qcGVn/P2lzaWc9MCZxPTgw",
    },
    {
      name: "Toyota Ertiga",
      seating: "7 Seater",
      pricePerKm: "₹14/km",
      image:
        "https://imgs.search.brave.com/zYLe05aGnAJL5EtYF1C_yxiZhmOrWILu0fATYylMP6w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YXV0b2NhcmluZGlh/LmNvbS9HYWxsZXJp/ZXMvMjAxOTAzMjIw/NTEzNDZfTWFydXRp/LUVydGlnYS1TcG9y/dC1yZWFyLmpwZz93/PTM3MyZoPTI0NiZx/PTc1JmM9MQ",
    },
    {
      name: "Tavera",
      seating: "7 Seater",
      pricePerKm: "₹16/km",
      image:
        "https://imgs.search.brave.com/qu78xWxvb7Vj88mwFMVgLkuhT_HWTb-gdj8pXIP3Bts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyZml0ZXhwZXJ0/cy5jb20vY2FyLW1v/ZGVscy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wMS90YXZl/cmEuanBn",
    },
    {
      name: "Tourist Bus",
      seating: "20 Seater",
      pricePerKm: "₹32/km",
      image:
        "https://imgs.search.brave.com/b0vkvbxGNkmbrvFn1pzvsD0uHwDO1UuJNJpIUzbCWv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzExLzk2LzYx/LzM2MF9GXzIxMTk2/NjExMl9kS3BFOFFK/Y1lueW9RT2N3dUNs/S1Jxd2ttRFRLbmw1/SC5qcGc",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold text-primary-blue mb-8 text-center"
      >
        Cab Service - Choose Your Ride
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-ai-gradient-card p-6 rounded-lg shadow-md"
          >
            <img
              src={vehicle.image}
              alt={`${vehicle.name} vehicle`}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-extrabold text-primary-blue mb-2">
              {vehicle.name}
            </h2>
            <p className="text-neutral-gray font-bold mb-2">
              <strong>Seating:</strong> {vehicle.seating}
            </p>
            <p className="text-neutral-gray font-bold mb-4">
              <strong>Price:</strong> {vehicle.pricePerKm}
            </p>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <button
                to="/book"
                onClick={() => handleBookNow(vehicle)}
                className="inline-block bg-accent text-neutralDark px-4 py-2 rounded-lg font-extrabold text-base hover:bg-primary-blue transition-colors"
                aria-label={`Book ${vehicle.name} cab`}
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
          className="inline-block bg-primary-blue text-white px-4 py-2 rounded-lg font-extrabold text-base hover:bg-accent-gold hover:text-primary-blue transition-colors"
        >
          <Link to="/home" aria-label="Back to Home">
            Back to Home
          </Link>
        </motion.div>
      </div>

      {selectedService && (
        <BookingInquiryForm
          isOpen={isModelOpen}
          onClose={() => setIsModelOpen(false)}
          serviceType="Cab"
          serviceName={selectedService.name}
        />
      )}
    </div>
  );
};

export default CabService;
