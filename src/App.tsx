import React, { useState } from "react";
import Navbar from "./components/Shared/Navigations/Navbar";
import Hero from "./components/Home/Hero";
import Vision from "./components/Home/Vision";
import NewsLetter from "./components/Home/NewsLetter";
import Footer from "./components/Shared/Navigations/Footer";
import Features from "./components/Home/Features/Features";
function App() {
  return (
    <main className="font-clash bg-gradient-to-b from-black-main to-[#3D0C3D]">
      <Navbar />
      <Hero />
      <Vision />
      <Features />
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default App;
