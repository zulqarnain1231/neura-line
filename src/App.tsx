import React, { useState } from "react";
import Navbar from "./components/Shared/Navigations/Navbar";
import Hero from "./components/Home/Hero";
import Vision from "./components/Home/Vision";
import NewsLetter from "./components/Home/NewsLetter";
function App() {
  return (
    <main className="font-clash bg-gradient-to-b from-black-main to-[#3D0C3D]">
      <Navbar />
      <Hero />
      <Vision />
      <NewsLetter />
    </main>
  );
}

export default App;
