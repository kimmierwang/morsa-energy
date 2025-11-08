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
            <div className="relative overflow-visible rounded-3xl shadow-lg">
              <img src="/images/pe5.png" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px] object-cover rounded-3xl" />

              <div className="absolute -top-8 left-6 flex items-center z-10">
                <div className="flex items-center -space-x-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white bg-white shadow-sm">
                    <img src="/images/pe1.png" alt="thumb 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white bg-white shadow-sm">
                    <img src="/images/pe2.png" alt="thumb 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white bg-white shadow-sm">
                    <img src="/images/pe3.png" alt="thumb 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white bg-white shadow-sm">
                    <img src="/images/pe4.png" alt="thumb 4" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transmission section */}
        <section className="transmission-section py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Transmission</h2>
              </div>
              <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  From feasibility studies, route selection, right of way/easement acquisition, and permitting through final design to construction and final inspection, MEL has exceptional capabilities to provide the expertise necessary to successfully complete both underground and overhead transmission projects with distribution, communication and substation components. Our staff’s project experience has varied from sub-transmission through 320kV and includes a wide range of design and construction approaches.
                </p>
                <p>
                  Our firm’s experience includes a wide range of voltage levels for new, upgraded, and repaired facilities. The installation of foundations, lattice steel, tubular steel, wood pole structures, conductor and fibre optic ground wire and cables is our core expertise. Our staff has experience studying feasibility and providing preliminary and final designs for lines with a wide variety of foundation, structure and configuration types. MEL own specialized transmission line construction equipment regardless of size or scope. We also deploy specialized transmission computer programs including SAG10, PLS-CADD, PLS-POLE, PLS-TOWER, PLS-SAPS, CAISSON, and LPILE. Mosra has the expertise and the equipment to get the job done.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dual image showcase (pe6 & pe7) */}
        <section className="images-showcase-section py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="image-card-left overflow-hidden rounded-3xl">
                <img src="/images/pe6.png" alt="Transmission towers" className="w-full h-[200px] md:h-[260px] lg:h-[320px] object-cover" />
              </div>

              <div className="image-card-right overflow-hidden rounded-3xl">
                <img src="/images/pe7.png" alt="Engineer on tablet" className="w-full h-[200px] md:h-[260px] lg:h-[320px] object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
