import { StrictMode } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.jsx";
import "./index.css";
import Packages from "./components/Packages.jsx";
import Gallery from "./components/Gallery.jsx";
import Services from "./components/Services.jsx";
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
import DestinationDetails from "./Pages/DestinationDetail.jsx";
import ContactFloatingToggle from "./components/ContactFloatingToggle.jsx";

// Main entry point: renders the React app with routing and layout
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Set up React Router for navigation */}
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes with header/footer */}
        <Route element={<Layout />}>
          {/* Redirect root to /home */}
          <Route path="/" element={<Navigate to={"/home"} />}></Route>
          {/* Define all main routes */}
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
          {/* BookingInquiryForm route (if needed as a page) */}
          <Route path="/hotel-service" element={<BookingInquiryForm />} />
          {/* Dynamic route for destination details */}
          <Route path="/destination/:title" element={<DestinationDetails />} />
          {/* Dynamic route for tour details */}
          <Route path="/tour-details/:packageTitle" element={<TourDetails />} />
          {/* Catch-all for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* Floating contact button (always visible) */}
      <ContactFloatingToggle />
    </BrowserRouter>
  </StrictMode>
);
