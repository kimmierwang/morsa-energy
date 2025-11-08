import Image from "next/image";
import React from "react";

export default function PowerPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero banner */}
      <section className="bg-[#f9ecec] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">Energy &amp; Power</h1>
            <p className="text-sm text-gray-700">
              Delivering reliable energy and power solutions that fuel growth, innovation, and sustainability. From generation to distribution, we engineer robust energy systems that keep industries running and communities thriving.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Power Generation &amp; Grid Solutions</span>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">Reliable Power For Industry and Communities</h2>
            <p className="text-gray-700 mb-6">
              <span className="mel-acronym">MEL</span> develops and operates energy assets designed for dependable, efficient electricity supply. Our work spans coal-to-power projects, grid integration, and distribution upgrades, ensuring stable power for manufacturing hubs and rapidly growing cities.
            </p>
            <p className="text-gray-700">
              We design systems with lifecycle performance in mind: generation planning, transmission and distribution engineering, protection and control, and long-term asset management. Our teams blend local execution with international standards to deliver outcomes that stand the test of time.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow">
            <Image src="/images/img5.jpg" alt="Power systems and infrastructure" width={900} height={580} className="w-full h-full object-cover rounded-2xl" />
          </div>
        </section>
      </main>
    </div>
  );
}
