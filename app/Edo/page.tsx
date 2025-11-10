
import Image from "next/image";
import React from "react";

export default function Edo() {
  return (
    <div className="bg-white text-gray-900">
      {/* --- Overview Section --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Title */}
          <div>
            <h1 className="relative inline-block text-3xl md:text-4xl font-bold text-red-600 after:content-[''] after:block after:w-full after:h-[1px] after:bg-red-600 after:mt-2">
              Edo Limestone Project
            </h1>
          </div>

          {/* Right Paragraph */}
          <div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Mosra Energy Limited’s limestone exploration program in Edo State spans Akoko-Edo and Owan East regions, where pilot drilling and geological surveys have identified promising mineralization zones. Analyses show high calcium oxide content and consistent deposit thickness, positioning the area as a viable source for cement production. 
            </p>
          </div>
        </div>

        {/* Image Below */}
        <div className="mt-10">
          <div className="relative w-full h-[400px] md:h-[480px] lg:h-[450px]">
            <Image
              src="/images/ed1.png"
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
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Edo Limestone Project – Strengthening Nigeria’s Industrial Foundations</h2>
              </div>
              <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  The company’s presence is in two states (Edo and Benue Sate) of Nigeria where exploration activity is being planned for Limestone projects. The Edo site is located in Akoko-Edo and Owan East Local Government Area of the State while Benue site is located in Gboko Local Government Area in the State.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* --- Project Showcase Section --- */}
    <div className="text-center mt-8">
            <h2 className="mt-6 text-2xl md:text-2xl font-bold">Edo Limestone Site Map</h2>
          </div>

           <section className="Delta-Map py-8">
          <div className="max-w-6xl mx-auto px-8">
            <div className="relative overflow-visible rounded-3xl">
              <img src="/images/ed2.png" alt="Power infrastructure" className="w-full h-[360px] md:h-[420px] lg:h-[480px]" />
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
              <p className="text-sm text-gray-700">The deposit occurs at about 2.00m beneath the surface</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">02</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">48.57 – 52.62% CaO, 0.09 - 0.24% Fe2O3, 0.62 – 6.34% MgO, 1.10 - 2.75% SiO, 41.69 - 42.90% LOI with average relative density of 2.74</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">03</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Deposit estimated thickness is about 15.00m. 15 Pilot exploratory boreholes proposed within the suspected potential area</p>
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
