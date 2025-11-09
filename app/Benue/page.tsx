
import Image from "next/image";
import React from "react";

export default function Benue() {
  return (
    <div className="bg-white text-gray-900">
      {/* --- Overview Section --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
              Delta Lignite Project 
            </h1>
            <div className="w-16 h-[2px] bg-red-500 mb-4"></div>
          </div>

          {/* Right Paragraph */}
          <div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Building the foundation for a sustainable energy future from Delta’s rich lignite reserves.
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
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Idowu Falola Coal Mines (IFCM)- Lignite Resource </h2>
              </div>
              <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                 The Delta Lignite Mine Project lies within the Azagba-Ogwuashi Lignite Formation, about 5 km off the Benin–Onitsha highway with an area of 11.4 km². Mosra Energy explored Exploration Licence (EL) Block 20981, drilling 112 boreholes (96 RC and 16 Core) at 250m x 250m spacing.
                </p>
                <p>
                 Five lignite seams (A–E) were identified at depths between 7.75m and 77.1m, with an average thickness of 5.5m. The deposit occurs within sandstone, clay, mudstone, carbonaceous shale, and lignite formations.
                    The lignite is uniform brownish-black, with high volatile matter, excellent reactivity, and a fibrous texture — ideal for thermal power generation.
                </p>
                  <p>
                 Geologically, the deposit lies within the Tertiary Niger Delta Formation, featuring thick, laterally extensive seams embedded in stable clay-shale sequences. Exceptional preservation across the deposit ensures a consistent calorific value, reinforcing its reliability for future energy projects
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* --- Project Showcase Section --- */}
    <div className="text-center mt-8">
            <h2 className="mt-6 text-2xl md:text-2xl font-bold">Delta Site Location Plan (MAP)</h2>
          </div>

           <section className="Delta-Map py-8">
          <div className="max-w-6xl mx-auto px-8">
            <div className="relative overflow-visible rounded-3xl">
              <img src="/images/map10.png" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px]" />
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
