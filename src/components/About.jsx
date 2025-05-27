import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BusOne from "../assets/BusOne.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" },
};

const About = () => (
  <div className="min-h-screen flex flex-col font-raleway bg-white">
    <Header />
    <main className="flex-grow">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #6B21A8 100%)",
        }}
        className="relative h-80  text-white flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-50" />
        <div className="relative text-center">
          <h1 className="text-4xl font-bold mb-2">About Yadav Bus Services</h1>
          <p className="text-lg text-white">
            Your trusted partner for seamless travel across India.
          </p>
        </div>
      </motion.section>

      {/* Company History */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{
          background:
            "linear-gradient(135deg, #F1F5F9 0%, #D1FAE5 50%, #FEF3C7 100%)",
        }}
        className="w-full mx-auto py-10 px-4 "
      >
        <h2 className=" text-2xl font-bold text-center text-[#1E3A8A] mb-6">
          Our Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-900">
              Founded in 2020, Yadav Bus Services started with a vision to
              redefine bus travel in India. From a single route in Rajasthan,
              we’ve grown to serve thousands of passengers across multiple
              cities, offering comfort, reliability, and affordability.
            </p>
            <p className="text-gray-900 mt-4">
              Our commitment to customer satisfaction and innovation has made us
              a preferred choice for travelers seeking hassle-free journeys.
            </p>
          </div>
          <img
            src={BusOne}
            alt="Yadav Bus Fleet"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="w-full mx-auto py-10 px-4"
      >
        <h2 className="text-2xl font-bold text-center text-[#1E3A8A] mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Amit Yadav",
              role: "Founder & CEO",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Priya Sharma",
              role: "Operations Manager",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Ravi Patel",
              role: "Customer Support Lead",
              image: "https://randomuser.me/api/portraits/men/65.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)",
              }}
              className="rounded-lg shadow-md p-4 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-[#1E3A8A] mt-4">
                {member.name}
              </h3>
              <p className="text-[#4B5563]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        style={{
          background:
            "linear-gradient(135deg, #F1F5F9 0%, #D1FAE5 50%, #FEF3C7 100%)",
        }}
        className="w-full mx-auto py-10 px-4 text-center"
      >
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">
          Ready to Travel with Us?
        </h2>
        <p className="text-[#4B5563] mb-6">
          Join thousands of happy travelers and book your next journey today!
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/book"
            className="inline-block bg-[#F59E0B] text-[#1E3A8A] px-6 py-3 rounded-lg font-bold"
          >
            Book Now
          </Link>
        </motion.div>
      </motion.section>
    </main>
    <Footer />
  </div>
);

export default About;
