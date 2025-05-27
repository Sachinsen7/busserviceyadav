import React from "react";
import { motion } from "framer-motion";

// Animation variants for gallery images
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const Gallery = () => {
  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Yadav Bus Fleet",
    },
    {
      src: "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Jaipur Palace",
    },
    {
      src: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Taj Mahal",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1716999429943-f3c7c89267e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Happy Travelers",
    },
    {
      src: "https://images.unsplash.com/photo-1716747713255-328cf3c2545e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Delhi Monument",
    },
    {
      src: "https://images.unsplash.com/photo-1538391912490-304338a7f94c?q=80&w=2816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Luxury Bus Interior",
    },
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #F1F5F9 0%, #D1FAE5 50%, #FEF3C7 100%)",
      }}
      className="mx-auto py-10 px-4 font-raleway "
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center text-[#1E3A8A] mb-6"
        >
          Our Travel Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
