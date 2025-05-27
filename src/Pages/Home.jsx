import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import TourCard from "../components/tourCard.jsx";
import BookingForm from "../components/BookingForm.jsx";
import Footer from "../components/Footer.jsx";
import delhi from "../assets/delhi.jpg";
import agra from "../assets/agra.jpg";
import jaipur from "../assets/jaipur.jpg";
import hyderabad from "../assets/hyederabad.jpg";
import mumbai from "../assets/mumba.jpg";
import chennai from "../assets/chennai.jpg";
import Gallery from "../components/Gallery.jsx";
import Services from "../components/Services.jsx";
import Packages from "../components/Packages.jsx";

const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const destinations = [
    {
      image: jaipur,
      title: "Jaipur",
      description: "Explore the Pink City with its vibrant palaces and forts.",
    },
    {
      image: delhi,
      title: "Delhi",
      description: "Discover the historic and modern charm of India’s capital.",
    },
    {
      image: agra,
      title: "Agra",
      description: "Visit the iconic Taj Mahal and Agra Fort.",
    },
    {
      image: hyderabad,
      title: "Hyderabad",
      description: "Experience the cultural richness of Hyderabad.",
    },
    {
      image: mumbai,
      title: "Mumbai",
      description:
        "Discover the bustling city of Mumbai with its iconic landmarks.",
    },
    {
      image: chennai,
      title: "Chennai",
      description: "Immerse yourself in the cultural heritage of Chennai.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col font-raleway bg-white"
    >
      <Header />
      <main className="flex-grow">
        <Hero />

        <section className="container mx-auto py-10 px-4">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-[#1E3A8A] mb-6"
          >
            Explore Top Destinations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <TourCard
                key={index}
                image={dest.image}
                title={dest.title}
                description={dest.description}
              />
            ))}
          </div>
        </section>
        <Gallery />
        <Services />
        <Packages />
        <BookingForm />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
