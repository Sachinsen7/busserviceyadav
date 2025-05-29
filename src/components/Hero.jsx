import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import BusOne from "../assets/BusOne.png";
// import BusTwo from "../assets/BusTwo.png";
// import BusThree from "../assets/BusThree.png";

const slideVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
};

const Hero = () => {
  const slides = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzfGVufDB8fDB8fHww",
      title: "Travel with Comfort",
      subtitle: "Experience luxury with Yadav Bus Services.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Explore New Routes",
      subtitle: "Daily trips to top destinations.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Book Your Journey",
      subtitle: "Fast, easy, and reliable bookings.",
    },
  ];

  return (
    <section className="relative h-[800px]  font-raleway">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center text-white"
                >
                  <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                  <p className="text-lg text-[#fffbfb] font-bold">
                    {slide.subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#5A9AA3" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-secondary  px-6 py-3 rounded-lg font-bold cursor-pointer"
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Hero;
