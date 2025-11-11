import Link from "next/link";
import React from "react";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <AboutUs />
      <Services />
      <Expertise />
      <Projects />
    </main>
  );
}
