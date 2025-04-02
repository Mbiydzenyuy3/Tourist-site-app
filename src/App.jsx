import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUsPage";
import ServicePage from "./pages/PackagePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactUsPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/package" element={<ServicePage />} />
        <Route path="/gallery" element={<GalleryPage value={{ Image }} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
