import React from "react";
import { motion } from "framer-motion";

// Array of customer reviews
const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    review:
      "Amazing service! The bus was clean, and the driver was very professional.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Singh",
    review:
      "I booked a cab for my family trip, and it was a smooth experience!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Ravi Kumar",
    review:
      "The Shimla tour package was fantastic. Highly recommend Yadav Bus Services!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
];

// Animation variants for review cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ReviewSection component displays customer reviews in animated cards
const ReviewSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      {/* Section heading */}
      <h2 className="text-4xl font-bold text-primary-blue mb-12">
        Customer Reviews
      </h2>
      {/* Reviews grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:-translate-y-1 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)",
            }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Reviewer image */}
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-orange"
            />
            {/* Reviewer name */}
            <h3 className="text-xl font-semibold text-teal mb-2">
              {review.name}
            </h3>
            {/* Review text */}
            <p className="text-neutralDark mb-4">{review.review}</p>
            {/* Star rating */}
            <div className="text-orange  text-lg">
              {"⭐".repeat(review.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;