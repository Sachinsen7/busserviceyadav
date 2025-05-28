import React, { useState } from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const overlayVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

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

const GallerySection = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openOverlay = (index) => {
    setSelectedImageIndex(index);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <section className="mx-auto py-12 px-4 font-raleway bg-ai-gradient-section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-center text-primary-blue mb-8"
        >
          Our Travel Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg cursor-pointer"
              role="button"
              aria-label={`View ${image.alt} in gallery`}
              onClick={() => openOverlay(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover will-change-transform"
                loading="lazy"
              />
              <motion.div
                initial="hidden"
                variants={overlayVariants}
                whileHover="visible"
                className="absolute inset-0 bg-primary-blue bg-opacity-70 flex items-center justify-center rounded-lg"
              >
                <p className="text-white text-lg font-semibold text-center px-4 drop-shadow-md">
                  {image.alt}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Overlay Section */}
      {isOverlayOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <div className="relative max-w-5xl w-full p-4">
            {/* Close Button */}
            <button
              onClick={closeOverlay}
              className="absolute top-1 right-1 text-white text-2xl font-bold"
              aria-label="Close gallery overlay"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg overflow-hidden ${
                    index === selectedImageIndex
                      ? "border-4 border-accent-gold"
                      : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <p className="absolute bottom-2 left-2 text-white font-semibold drop-shadow-md">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
