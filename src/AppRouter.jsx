import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contect } from "./components/Contect";
import Magnetic from "./Magnetic";
import CustomCursor from "./CustomCursor";

const AppRouter = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* Full-screen background */}
      <div className="fixed inset-0 -z-10 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Page Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        {/* <Experience/> */}
        <Projects/>
        <Contect/>
        <Magnetic></Magnetic>
        <CustomCursor></CustomCursor>
      </div>

    </div>
  );
};

export default AppRouter;
