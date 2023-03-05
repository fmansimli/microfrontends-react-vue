import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/_common/Navbar";
import Footer from "./components/_common/Footer";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

import AuthModule from "./modules/AuthModule";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ height: "85vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth" element={<AuthModule />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
