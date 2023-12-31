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
    <main className="font-clash bg-black-main overflow-hidden relative">
      <Navbar />
      <Hero />
      <Vision />
      <CreateYourCompany />
      <Startup />
      <Features />
      <NewsLetter />
      <Footer />
      <div className="fixed bottom-0 left-0 z-10 h-[300px] w-full sticky-gradient"></div>
    </main>
  );
}

export default App;
