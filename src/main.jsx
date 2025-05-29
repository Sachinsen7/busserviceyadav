import { StrictMode } from "react";

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
import Layout from "./Layout.jsx";
import Privacy from "./Pages/Privacy.jsx";
import NotFound from "./Pages/Notfound.jsx";
import TourDetails from "./components/TourDetails.jsx";
import CabService from "./Pages/CabService.jsx";
import BusService from "./Pages/BusService.jsx";
import HotelService from "./Pages/HotelService.jsx";
import BookingInquiryForm from "./components/BookingInquiryForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/package" element={<Packages />} />
          <Route path="/service" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cab-service" element={<CabService />} />
          <Route path="/bus-service" element={<BusService />} />
          <Route path="/hotel-service" element={<HotelService />} />
          <Route path="/hotel-service" element={<BookingInquiryForm />} />

          <Route path="/tour-details/:packageTitle" element={<TourDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
