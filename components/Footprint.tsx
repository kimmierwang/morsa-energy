import React from "react";

const slides = [
  "/images/gal1.png",
  "/images/gal2.png",
  "/images/gal3.png",
  "/images/gal4.png",
];

export default function Footprint(): JSX.Element {
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
          <div className="py-6 overflow-visible">
            <div className="flex justify-center gap-6 items-end">
              {slides.map((src, i) => (
                <div
                  key={i}
                  className="fp-card bg-gray-50 rounded-2xl overflow-hidden shadow-sm relative"
                >
                  <img src={src} alt={`footprint-${i}`} className="w-[220px] md:w-[260px] h-[140px] md:h-[180px] object-cover rounded-2xl" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full">View all projects</button>
          </div>
        </div>
      </div>
    </section>
  );
}
