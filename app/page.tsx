import Link from "next/link";
import React from "react";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <AboutUs />
      <Services />
    </main>
  );
}
