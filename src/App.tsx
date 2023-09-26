import React, { useState } from "react";
import Navbar from "./components/Shared/Navigations/Navbar";
import Hero from "./components/Home/Hero";
import Vision from "./components/Home/Vision";
import NewsLetter from "./components/Home/NewsLetter";
import Footer from "./components/Shared/Navigations/Footer";
import Features from "./components/Home/Features/Features";
import CreateYourCompany from "./components/Home/CreateYourCompany";
import Startup from "./components/Home/Startup";
function App() {
  return (
    <main className="font-clash bg-gradient-to-b from-black-main to-[#3D0C3D] overflow-hidden">
      <Navbar />
      <Hero />
      <Vision />
      <Startup />
      <CreateYourCompany />
      <Features />
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default App;
