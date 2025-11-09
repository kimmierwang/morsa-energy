
import Image from "next/image";
import React from "react";

export default function Kogi2() {
  return (
    <div className="bg-white text-gray-900">
      {/* --- Overview Section --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
              Kogi Coal Project
            </h1>
            <div className="w-16 h-[2px] bg-red-500 mb-4"></div>
          </div>

          {/* Right Paragraph */}
          <div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Developing reliable coal resources to power industries and drive economic growth.
            </p>
          </div>
        </div>

        {/* Image Below */}
        <div className="mt-10">
          <div className="relative w-full h-[400px] md:h-[480px] lg:h-[450px]">
            <Image
              src="/images/pe10.png"
              alt="Mining site landscape"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- Key Developments Section --- */}
      <section className="transmission-section py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Tunde Ramos Coal Mines (TRCM) – Sub-Bituminous Coal</h2>
              </div>
              <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                 Mosra Energy Limited (MEL) holds Mining Lease No. 24884ML for the Tunde Ramos Coal Mines (TRCM), located within the Ogboyaga-Okaba sub-bituminous coal deposits across Odele, Ichala, Manejo, Ika Ilorin, and Ikah Edeto in Ankpa and Omala LGAs, Kogi State, North Central Nigeria. 
                </p>
                <p>
                 The project area covers 22 km² and was established following extensive exploration and geological assessments confirming rich, continuous seams of high-quality coal. The coal exhibits high energy content, low ash and sulfur levels, and excellent friability, making it ideal for efficient power generation and industrial applications. 
                </p>
                  <p>      
                    Geologically, the deposit lies within the prolific Anambra Basin, formed from dense tropical vegetation in stable deltaic environments, providing predictable stratigraphy and long-term mining potential.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* --- Project Showcase Section --- */}
    <div className="text-center mt-8">
            <h2 className="mt-6 text-2xl md:text-2xl font-bold">Kogi Site Location Plan (MAP)</h2>
          </div>

           <section className="Delta-Map py-8">
          <div className="max-w-6xl mx-auto px-8">
            <div className="relative overflow-visible rounded-3xl">
              <img src="/images/map10.png" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px]" />
            </div>
          </div>
        </section>

          <section className="tenement-activities-section py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">01</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">145 boreholes were drilled by MEL within its five EL licenses in Kogi sub-bituminous coal mine site which is consolidated into one license 20288 for resource estimation.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">02</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">3 coal seams were intersected with seam A being the topmost and potential seam having consistent throughout the block.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">03</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">The thickness range is between 1.00 – 2.15 m and average seam thickness is about 1.47 m.</p>
            </div>
            </div>
        </div>
      </section>
      <section className="transmission-section py-10 border-t border-gray-200 mb-8">
                 <div className="text-center mb-8">
            <h2 className="mt-6 text-3xl md:text-4xl font-bold">Meet Our Leadership Team</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Dedicated professionals leading the charge in engineering reliable infrastructure for a sustainable future.</p>
          </div>
        </section>

        <section className="power-hero-section py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-visible rounded-3xl">
              <img src="/images/map11.jpg" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px]" />
            </div>
          </div>
        </section>

                  {/* --- Investment Section --- */}
      <section className="investment-section py-16 bg-[#fafafa] mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: Heading above image */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Looking To Make An Investment?
              </h3>

              <div className="relative overflow-hidden rounded-r-[120px] rounded-l-none shadow-md">
                <Image
                  src="/images/img1.png"
                  alt="Investment opportunity"
                  width={900}
                  height={400}
                  className="block w-full h-[250px] md:h-[350px] object-cover"
                />
              </div>
            </div>

            {/* Right: Intro above form */}
            <div className="space-y-5">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Connect with our Investor Relations team to learn more about
                current opportunities and project performance.
              </p>

              <form className="space-y-4 mt-2 bg-white p-6 rounded-2xl shadow-sm">
                <input
                  name="name"
                  placeholder="Name"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all duration-300"
                  >
                    <Image
                      src="/icons/icon2.svg"
                      alt="Send icon"
                      width={20}
                      height={20}
                    />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
