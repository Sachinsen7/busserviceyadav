import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.jsx";
import "./index.css";
import Packages from "./components/Packages.jsx";
import Gallery from "./components/Gallery.jsx";
import Services from "./components/Services.jsx";
import TourCard from "./components/tourCard.jsx";
import BookingForm from "./components/BookingForm.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service" element={<Services />} />
        <Route path="/tourcard" element={<TourCard />} />
        <Route path="/bookingForm" element={<BookingForm />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
