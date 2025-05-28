import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import TourCard from "../components/tourCard.jsx";
import BookingForm from "../components/BookingForm.jsx";
import Footer from "../components/Footer.jsx";
// import delhi from "../assets/delhi.jpg";
// import agra from "../assets/agra.jpg";
// import jaipur from "../assets/jaipur.jpg";
// import hyderabad from "../assets/hyederabad.jpg";
// import mumbai from "../assets/mumba.jpg";
// import chennai from "../assets/chennai.jpg";
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
      image:
        "https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Jaipur",
      description: "Explore the Pink City with its vibrant palaces and forts.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Delhi",
      description: "Discover the historic and modern charm of India’s capital.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Agra",
      description: "Visit the iconic Taj Mahal and Agra Fort.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551161242-b5af797b7233?q=80&w=2902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hyderabad",
      description: "Experience the cultural richness of Hyderabad.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mumbai",
      description:
        "Discover the bustling city of Mumbai with its iconic landmarks.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526572690437-c3f99d109cfd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
