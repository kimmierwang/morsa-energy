import Image from "next/image";
import React from "react";

export default function PowerPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero banner */}
      <section className="bg-[#f9ecec] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h1 className="relative inline-block text-3xl md:text-4xl font-bold text-red-600 after:content-[''] after:block after:w-75 after:h-[1px] after:bg-red-600 after:mt-2">Energy &amp; Power</h1>
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
          <section className="transmission-gallery mt-8">
  <div className="w-full">
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 gap-6">
      {/* Left Image */}
      <div className="w-[90%] md:w-[42%] overflow-hidden rounded-r-[5rem] md:rounded-r-full md:rounded-l-none shadow-lg">
        <img
          src="/images/pe6.jpg"
          alt="Transmission towers"
          className="w-full h-[150px] md:h-[240px] object-cover"
        />
      </div>

      {/* Right Image */}
      <div className="w-[90%] md:w-[42%] overflow-hidden rounded-l-[5rem] md:rounded-l-full md:rounded-r-none shadow-lg">
        <img
          src="/images/pe7.jpg"
          alt="Engineer on site"
          className="w-full h-[150px] md:h-[240px] object-cover"
        />
      </div>
    </div>
  </div>
</section>

        
         <section className="Distribution-section py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Distribution</h2>
              </div>
              <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                    Since inception, MEL has applied its fully-integrated Engineering, Procurement and Construction skills to its distribution work. We perform both new plant installation and URD cable replacement on a scale matched by few other indigenous contractors. We have extensive experience in the installation of all “dry utilities” on new plant development. This work includes complete installation of not only electric distribution facilities, but also natural gas, telecommunications (including fiber optic cable), and cable television facilities in a shared trench.
                </p>
               
              </div>
            </div>
          </div>
        </section>

         <section className="power-hero-section py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-visible rounded-3xl">
              <img src="/images/pe12.png" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px]" />
            </div>
          </div>
        </section>

         <section className="transmission-section py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Substation</h2>
              </div>
              <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Since inception, MEL has applied its fully-integrated Engineering, Procurement and Construction skills to its distribution work..
                  We perform both new plant installation and URD cable replacement on a scale matched by few other indigenous contractors. We have extensive experience in the installation of all “dry utilities” on new plant development. This work includes complete installation of not only electric distribution facilities, but also natural gas, telecommunications (including fiber optic cable), and cable television facilities in a shared trench.
                </p>
              
              </div>
            </div>
          </div>
        </section>

         <section className="mb-8">
                  <div>
                    <h2 className="text-2xl md:text-2xl font-extrabold leading-tight mb-8">Testing & Technical Services</h2>
                    <p className="text-gray-700 mb-6">
                     Our test engineers and technicians have extensive experience in all aspects of equipment testing and maintenance. From protection and controls to  transformers, switchgear, breakers etc. Our testing and maintenance services have included 33kV – 320kV oil circuit breaker
                      testing and maintenance, including bushing power factor, conductor, time travel, speed adjustments and other tests associated with maintenance activities.
                      Power transformer testing and maintenance for transformers up to 100 MVA and 230 kV LTC testing and maintenance and metal-clad breaker testing and maintenance. MEL offer testing services for start-up and commissioning or regular maintenance. Our testing group is ready to assist you in your testing, start-up and maintenance needs.
                    </p>
                  </div>
                </section>
              <section className="power-hero-section py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-visible rounded-3xl">
              <img src="/images/pe10.png" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px]" />
            </div>
          </div>
        </section>
        <section className="mb-8">
                  <div>
                    <h2 className="text-2xl md:text-2xl font-extrabold leading-tight mb-8">Engineering/Design Services</h2>
                    <p className="text-gray-700 mb-6">
                          MEL offers fully integrated planning, engineering, design, and technical services. We successfully deliver all types of
                           energy solutions to some of the most challenging projects in the industry.
                        Our talented engineers and planners work out of our Headquarters in Abuja and other remote sites within Nigeria. Our team has acquired a broad range of expertise and experience 
                        from undertaking projects throughout the Nation. From small-scale design-build work to large-scale multi-million projects, our approach is the same: customer-focused, value driven and innovative.
                    </p>
                  </div>
                </section>
              <section className="power-hero-section py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-visible rounded-3xl">
              <img src="/images/pe11.png" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px]" />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 section-divider">
          <div className="border-t border-gray-300 w-full" />
        </div>

             <section className="tenement-activities-section py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gray-700 text-base md:text-lg mb-8">
            MEL offers the following engineering, planning and design services:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">01</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Transmission Systems.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">02</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Substation/Switching Station</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">03</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Distribution Design</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">04</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Communications.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">05</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Project Mangement.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">06</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Construction Mangement.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
            <div className="activity-card">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">07</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Technical Service.</p>
            </div>

            <div className="activity-card">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">08</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Powerline Inspection</p>
            </div>
          </div>
        </div>
      </section>


      </main>
    </div>
  );
}
