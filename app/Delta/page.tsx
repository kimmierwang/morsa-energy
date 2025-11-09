
import Image from "next/image";
import React from "react";

export default function Delta() {
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
                  <div className="text-gray-700 mb-6 md:col-span-2 space-y-5 leading-relaxed text-sm md:text-base px-8">
                    <p>
                  The lignite seams were found occurring in zones of clay-shale, mudstone and lignitic shale separated by sandstone with subordinate bands of clay.
                 The seams were horizontally laid along the bedding plane and normally exposed along stream channels. Abundant proven reserves of Coal deposit has been identified within
                 the mining block and the geological resources given as 98.72 Mt. This is projected to increase after further exploration programme in the area.
                    </p>
                  </div>
        </section>

        <section className="power-hero-section py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-visible rounded-3xl">
              <img src="/images/map11.jpg" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px]" />
            </div>
          </div>
        </section>

            <div className="text-center mt-8">
            <h2 className="mt-6 text-2xl md:text-2xl font-bold">Delta Lignite CORE SAMPLE PHOTOGRAPH, GEOLOGICAL DESCRIPTION AND ASSAY DATA REPORT</h2>
          </div>
            
                  <section id="team" className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                          {/* Card 1 */}
                          <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/images/Ramos.png" alt="Olukayode Ramos" width={800} height={800} className="w-full h-[35rem] object-cover md:col-span-3" />
                            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <div className="text-white font-semibold">Olukayode Ramos</div>
                              <div className="text-xs text-white/80">Chief Executive Officer, Mosra Energy Ltd.</div>
                            </div>
                          </div>
            
                          {/* Card 2 */}
                          <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/images/Daniel.png" alt="Daniel Monwuba" width={600} height={800} className="w-full h-[35rem] object-cover" />
                            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <div className="text-white font-semibold">Daniel Monwuba</div>
                              <div className="text-xs text-white/80">Group Head, Procurement, Sales & Marketing</div>
                            </div>
                          </div>
            
                          {/* Card 3 */}
                          <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/images/lawal.png" alt="Engr. Muntari Lawal" width={600} height={800} className="w-full h-[35rem] object-cover" />
                            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <div className="text-white font-semibold">Engr. Muntari Lawal, FNSE</div>
                              <div className="text-xs text-white/80">Group Project Manager</div>
                            </div>
                          </div>
                        </div>
            
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/images/Chukwuma.png" alt="Chukwuma Chukwuekwu" width={600} height={800} className="w-full h-[35rem] object-cover" />
                            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <div className="text-white font-semibold">Chukwuma Chukwuekwu</div>
                              <div className="text-xs text-white/80">Group Head, Accounts & Finance</div>
                            </div>
                          </div>
            
                          <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/images/Ali.png" alt="Ahmed Ali" width={600} height={800} className="w-full h-[35rem] object-cover" />
                            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <div className="text-white font-semibold">Ahmed Ali</div>
                              <div className="text-xs text-white/80">Group Head, Human Resources & Corporate Services</div>
                            </div>
                          </div>
            
                          <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/images/Abubakar.png" alt="Abubakar Ibrahim" width={600} height={800} className="w-full h-[35rem] object-cover" />
                            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <div className="text-white font-semibold">Abubakar Ibrahim</div>
                              <div className="text-xs text-white/80">Head, Mineral Exploration</div>
                            </div>
                          </div>
                        </div>
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
