import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import "./styles/layout.css";

export default function App() {
  return (
    <>
      <Header />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}
