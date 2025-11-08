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

        <section className="power-hero-section py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              <img src="/images/pe5.png" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px] object-cover rounded-3xl" />

              <div className="absolute top-1 left-4 flex items-center">
                <div className="flex items-center -space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-white">
                    <img src="/images/pe1.png" alt="thumb 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-white">
                    <img src="/images/pe2.png" alt="thumb 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-white">
                    <img src="/images/pe3.png" alt="thumb 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-white">
                    <img src="/images/pe4.png" alt="thumb 4" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
