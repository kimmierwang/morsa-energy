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

        {/* Delta Lignite Coal Project section */}
        <section className="project-section mt-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

              <div className="md:col-span-1">
                <h3 className="text-2xl font-semibold text-gray-900">Delta Lignite Coal Project</h3>
                <p className="text-sm text-gray-700 mt-4">The Delta Lignite Coal Project is located within the Anagba-Ogwuashi lignite formation and comprises multiple exploration licences. The project area includes significant coal resources and infrastructure opportunities for both surface and near-surface mining operations. Our team provides end-to-end support from feasibility and permitting to contractor management and final handover, ensuring compliance and operational readiness.</p>
              </div>

              <div className="md:col-span-2 relative">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

                  <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm">
                    <img src="/images/pe5.png" alt="coal stockpile" className="w-full h-[180px] md:h-[220px] object-cover rounded-2xl" />
                  </div>

                  <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm">
                    <img src="/images/pe5.png" alt="site equipment" className="w-full h-[180px] md:h-[220px] object-cover rounded-2xl" />
                  </div>

                </div>

                {/* floating action button */}
                  <button aria-label="open project" className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                    <img src="/images/pe1.png" alt="thumb" className="w-6 h-6 rounded-full object-cover" />
                  </button>
              </div>
            </div>
          </div>
        </section>

        <section className="transmission-gallery mt-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-3xl">

              {/* Left image - rounded only on the left side */}
              <div className="overflow-hidden rounded-r-3xl md:rounded-r-3xl md:rounded-l-none">
                <img
                  src="/images/pe6.jpg"
                  alt="Transmission towers"
                  className="w-full h-[220px] md:h-[320px] object-cover"
                />
              </div>

              {/* Right image - rounded only on the right side */}
              <div className="overflow-hidden rounded-l-3xl md:rounded-l-3xl md:rounded-r-none">
                <img
                  src="/images/pe7.jpg"
                  alt="Engineer on site"
                  className="w-full h-[220px] md:h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project showcase below gallery using pe6 and pe7 */}
<section className="project-showcase mt-16 relative">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

      {/* Left Content */}
      <div className="md:col-span-1">
        <div className="activity-card bg-white">
          <div className="flex items-center gap-4 mb-4">
            <span className="activity-number font-semibold text-gray-600 text-lg">01</span>
            <div className="flex-1 border-t border-gray-300" />
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 leading-snug">
          Delta Lignite Coal Project
        </h3>
        <p className="text-base text-gray-700 mt-4 leading-relaxed">
          Delta Lignite Coal Project is located within the Anagba-Ogwuashi lignite formation.
          The project site covers multiple cadastral units and includes both surface and
          near-surface mining opportunities. Our team provides full lifecycle services from
          feasibility, permitting and design through to construction and site handover.
        </p>
      </div>

      {/* Right Image Grid */}
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-50">
            <img
              src="/images/pe6.jpg"
              alt="Mining site overview"
              className="w-full h-[260px] md:h-[340px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-50">
            <img
              src="/images/pe7.jpg"
              alt="Excavation site equipment"
              className="w-full h-[260px] md:h-[340px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Floating Arrow Button */}
  <button className="absolute bottom-6 right-6 bg-black text-white rounded-full p-3 hover:bg-gray-800 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </button>
</section>



      </main>
    </div>
  );
}
