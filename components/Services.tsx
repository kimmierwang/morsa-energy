import React from "react";

const services = [
  {
    title: "Mineral Exploration",
    subtitle: "We apply technologies for the exploration of minerals.",
    image: "/images/gal1.png",
  },
  {
    title: "Coal Excavation",
    subtitle: "Surface mining solutions optimized for safety and yield.",
    image: "/images/gal2.png",
  },
  {
    title: "Mine Designer",
    subtitle: "Design and planning services for mines and infrastructure.",
    image: "/images/gal3.png",
  },
  {
    title: "Drilling Operation",
    subtitle: "Industry best practice drilling and ground works.",
    image: "/images/gal4.png",
  },
];

export default function Services(): JSX.Element {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Services</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive mining, energy, and infrastructure solutions designed to meet today's
            demands and tomorrow's challenges.
          </p>
        </div>

        <div className="relative">
          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`service-card overflow-hidden rounded-3xl relative bg-gray-50 shadow-sm transform ${i % 2 === 0 ? "-translate-y-6 md:-translate-y-8" : "translate-y-6 md:translate-y-8"}`}
              >
                <img src={s.image} alt={s.title} className="w-full h-[220px] object-cover rounded-3xl" />
                <div className="absolute left-0 bottom-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-b-3xl">
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-xs text-white/90 mt-1">{s.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows placed under the first card */}
          <div className="mt-6 flex justify-center md:justify-start md:pl-0 gap-4">
            <button aria-label="prev" className="flex items-center justify-center w-12 h-12 rounded-full border border-red-200 text-red-600 bg-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L8.414 10l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button aria-label="next" className="flex items-center justify-center w-12 h-12 rounded-full border border-red-200 text-red-600 bg-white shadow-md">
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
