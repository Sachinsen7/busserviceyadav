import React from "react";
import { motion } from "framer-motion";

const BookingForm = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full mx-auto py-10 px-4 font-raleway "
  >
    <h2 className="text-2xl font-bold text-center text-[#1E3A8A] mb-6 font-raleway">
      Book Your Ticket
    </h2>
    <form className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="From"
        className="w-full p-2 border border-[#4B5563] rounded text-[#4B5563]"
      />
      <input
        type="text"
        placeholder="To"
        className="w-full p-2 border border-[#4B5563] rounded text-[#4B5563]"
      />
      <input
        type="date"
        className="w-full p-2 border border-[#4B5563] rounded text-[#4B5563]"
      />
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#F59E0B" }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-accent text-white p-2 rounded  cursor-pointer font-semibold"
      >
        Search Buses
      </motion.button>
    </form>
  </motion.section>
);

export default BookingForm;
