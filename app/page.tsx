import Link from "next/link";
import React from "react";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Footprint from "../components/Footprint";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <AboutUs />
      <Services />
      <Expertise />
      <Projects />
      <Footprint />
      <Testimonials />
    </main>
  );
}
