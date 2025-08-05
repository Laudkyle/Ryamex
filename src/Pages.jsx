import { Routes,Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutUs from "./AboutPage";
import ServicesPage from "./ServicePage";
import ContactPage from "./ContactPage";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default Pages;
