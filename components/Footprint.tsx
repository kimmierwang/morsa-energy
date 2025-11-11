"use client";
import React, { useEffect, useRef, useState } from "react";

const slides = [
  "/images/gal1.png",
  "/images/gal2.png",
  "/images/gal3.png",
  "/images/gal4.png",
  "/images/gal5.jpg",
  "/images/gal6.png",
];

export default function Footprint(): JSX.Element {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const calc = () => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.querySelector(".fp-card") as HTMLElement | null;
      const gap = 16;
      const cardW = (card?.clientWidth ?? 220) + gap;
      setStep(cardW);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if (!paused) setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = "transform 700ms ease";
    track.style.transform = `translateX(-${index * step}px)`;
  }, [index, step]);

  return (
    <section id="footprint" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Gallery</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">Our Mining Footprint</h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Take a closer look at Mosra Energy's active project sites and media stories highlighting our work in powering Nigeria's energy and mining sectors.
          </p>
        </div>

        <div className="relative">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="overflow-hidden py-6"
          >
            <div ref={trackRef} className="flex gap-4 will-change-transform">
              {slides.map((src, i) => (
                <div key={i} className={`fp-card min-w-[180px] md:min-w-[220px] bg-gray-50 rounded-2xl overflow-hidden shadow-sm relative ${i % 2 === 0 ? "-translate-y-4 md:-translate-y-6" : "translate-y-4 md:translate-y-6"}`}>
                  <img src={src} alt={`footprint-${i}`} className="w-full h-[120px] md:h-[160px] object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`dot-${i}`}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-red-600" : "bg-gray-300"}`}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full">View all projects</button>
          </div>
        </div>
      </div>
    </section>
  );
}
