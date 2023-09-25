import React, { useState } from "react";
import Navbar from "./components/Shared/Navigations/Navbar";
import Hero from "./components/Home/Hero";
function App() {
  return (
    <main className="font-clash bg-gradient-to-b from-black-main to-[#3D0C3D]">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
