import React from "react";
import { motion } from "framer-motion";

const ServiceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};
function Services() {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-accent-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
      ),
      title: "Online Booking",
      description: "Book your tickets easily through our secure platform.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-accent-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.54.55-.97 1.23-1.22 2.08h-1.9v-1.5c0-.66.36-1.26.89-1.56l1.13-1.14c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-.15.15C10.47 7.47 9.24 7 8 7V5c1.49 0 2.85.59 3.88 1.56l.15-.15c.98-.98 2.56-.98 3.54 0s.98 2.56 0 3.54z" />
        </svg>
      ),
      title: "Luxury Buses",
      description: "Travel in comfort with our modern, air-conditioned fleet.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-accent-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z" />
        </svg>
      ),
      title: "Customer Support",
      description: "24/7 support for all your travel needs.",
    },
  ];

  return (
    <section className="w-full mx-auto py-10 px-4 font-raleway">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-primary-blue mb-8"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={ServiceVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-secondary cursor-pointer rounded-lg shadow-md p-6 flex flex-col "
            >
              <div className="mb-4">{service.icon}</div>
              <h1 className="text-lg font-bold text-primary-blue font-raleway">
                {service.title}
              </h1>
              <p className="text-primary-blue mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
