"use client";
import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Delta Lignite Project",
    description: "Early drilling results reveal the lignite seam...",
    image: "/images/pe5.png",
  },
  {
    title: "Kogi Coal Project",
    description: "Mosra Energy Limited holds a mining lease in Kogi State...",
    image: "/images/pe6.jpg",
  },
  {
    title: "Benue Limestone Project",
    description: "High-quality limestone deposits in Benue State...",
    image: "/images/pe7.jpg",
  },
  {
    title: "North Site Project",
    description: "Exploration and site development work underway...",
    image: "/images/pe8.png",
  },
];

export default function Projects(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const CARD_GAP = 24; // matches gap-6
    const scrollStep = () => {
      const cardWidth = el.querySelector(".project-card")?.clientWidth || el.clientWidth;
      // scroll to next card smoothly
      const next = Math.min(el.scrollLeft + cardWidth + CARD_GAP, el.scrollWidth - el.clientWidth);
      el.scrollTo({ left: next, behavior: "smooth" });
    };

    const interval = setInterval(() => {
      if (!isPaused) {
        // if at end, scroll back to start
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollStep();
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => {
    const el = containerRef.current;
    if (!el) return;
    const CARD_GAP = 24;
    const cardWidth = el.querySelector(".project-card")?.clientWidth || el.clientWidth;
    const next = Math.max(el.scrollLeft - (cardWidth + CARD_GAP), 0);
    el.scrollTo({ left: next, behavior: "smooth" });
  };

  const next = () => {
    const el = containerRef.current;
    if (!el) return;
    const CARD_GAP = 24;
    const cardWidth = el.querySelector(".project-card")?.clientWidth || el.clientWidth;
    const nextPos = Math.min(el.scrollLeft + (cardWidth + CARD_GAP), el.scrollWidth - el.clientWidth);
    el.scrollTo({ left: nextPos, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Portfolio</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">Mining Projects & Site Location</h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive mining, energy, and infrastructure solutions designed to meet today's demands and tomorrow's challenges.
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="projects-scroll flex gap-6 overflow-x-auto no-scrollbar py-6 scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {projects.map((p) => (
              <div key={p.title} className="project-card min-w-[260px] md:min-w-[360px] lg:min-w-[420px] bg-gray-50 rounded-3xl overflow-hidden relative shadow-sm">
                <img src={p.image} alt={p.title} className="w-full h-[300px] object-cover" />
                <div className="absolute left-0 bottom-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-b-3xl">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-xs text-white/90 mt-1">{p.description}</p>
                </div>
                <div className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* arrows under first card - align start on md */}
          <div className="mt-6 flex justify-center md:justify-start md:pl-0 gap-4">
            <button onClick={prev} aria-label="prev" className="flex items-center justify-center w-12 h-12 rounded-full border border-red-200 text-red-600 bg-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L8.414 10l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button onClick={next} aria-label="next" className="flex items-center justify-center w-12 h-12 rounded-full border border-red-200 text-red-600 bg-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 3.707a1 1 0 010-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L12.586 10 6.293 3.707a1 1 0 011.414-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
