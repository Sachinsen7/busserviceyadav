import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const BookingInquiryForm = ({ isOpen, onClose, serviceType, serviceName }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    numPeople: "",
    notes: "",
    userPhone: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");

    // Validate required fields
    if (!formData.startDate || !formData.numPeople || !formData.userPhone) {
      setSubmitMessage(
        "Please fill in all required fields (Start Date, Number of People, Phone Number)."
      );
      return;
    }
    if (!formData.consent) {
      setSubmitMessage("Please provide consent to receive WhatsApp messages.");
      return;
    }

    setIsSubmitting(true);

    // Prepare the inquiry data
    const inquiryData = {
      serviceType,
      serviceName,
      startDate: formData.startDate,
      endDate: formData.endDate,
      numPeople: formData.numPeople,
      notes: formData.notes,
      userPhone: formData.userPhone.startsWith("+")
        ? formData.userPhone
        : `+${formData.userPhone}`,
    };

    try {
      const response = await fetch("http://localhost:5000/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMessage(
          "Inquiry sent successfully! We will contact you soon."
        );
        setTimeout(() => {
          onClose();
        }, 2000); // close modal after 2 seconds
      } else {
        setSubmitMessage("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-white text-neutralDark bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-4 "
          >
            <h2 className="text-2xl font-extrabold text-primary-blue mb-4">
              Booking Inquiry for {serviceName}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-neutralDark font-bold mb-1"
                  htmlFor="startDate"
                >
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div>
                <label
                  className="block text-neutral-gray font-bold mb-1"
                  htmlFor="endDate"
                >
                  End Date (Optional)
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  min={
                    formData.startDate || new Date().toISOString().split("T")[0]
                  }
                />
              </div>
              <div>
                <label
                  className="block text-neutralDark font-bold mb-1"
                  htmlFor="numPeople"
                >
                  Number of People <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="numPeople"
                  name="numPeople"
                  value={formData.numPeople}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                  min="1"
                />
              </div>
              <div>
                <label
                  className="block text-neutral-gray font-bold mb-1"
                  htmlFor="userPhone"
                >
                  Your Phone Number (with country code, e.g., +91){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="userPhone"
                  name="userPhone"
                  value={formData.userPhone}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  required
                  placeholder="+919876543210"
                />
              </div>
              <div>
                <label
                  className="block text-neutralDark font-bold mb-1"
                  htmlFor="notes"
                >
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  rows="3"
                />
              </div>

              <div>
                <label className="flex items-center text-neutral-gray">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  I consent to receive messages via WhatsApp.
                </label>
              </div>

              {/* submit */}
              {submitMessage && (
                <p
                  className={`text-center ${
                    submitMessage.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="bg-gray-300 text-neutralDark px-4 py-2 rounded-lg font-extrabold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  variants={buttonVariants}
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-accent text-primary-blue px-4 py-2 rounded-lg font-semibold   transition-colors

                  
                  "
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingInquiryForm;
