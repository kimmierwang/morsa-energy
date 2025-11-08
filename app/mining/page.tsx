import React from "react";

export default function MiningPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero banner */}
      <section className="bg-[#FBEAE957] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">Mining</h1>
            <p className="text-sm text-gray-700">
              Advancing responsible mining operations that unlock Nigeria’s rich mineral potential while promoting sustainability and community growth.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery below hero and before main content */}
     <section className="mining-gallery-section py-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="mining-gallery dotted-bg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        "/images/img1.png",
        "/images/img2.png",
        "/images/img3.png",
        "/images/img4.png",
      ].map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl shadow-lg [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_90%)]"
        >
          <img
            src={src}
            alt={`mining ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Coal To Power Generation */}
      <section className="power-gen-section py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="power-gen-content max-w-prose">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Coal To Power Generation</h2>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-700">
                <span className="mel-acronym">MEL</span> has aligned with the current administration’s plan to generate 30 per cent of electricity needed in the country from coal. Consequently, we have obtained coal exploration Licenses for over 15 tenements including Lignite of the Delta Coastal Plain domiciled in Delta State and Sub-Bituminous Coal of the Ogboyoga/Okaba mining district domiciled in Kogi State all of the Anambra Basin in Nigeria. We are currently working on developing these coal properties exclusively for power generation.
              </p>
              <div className="leader-profile mt-6 flex items-center gap-3">
                <img src="/images/Ramos.png" alt="Olukayode Ramos" className="h-12 w-12 rounded-full object-cover" />
                <div className="leading-tight">
                  <p className="font-semibold text-gray-900">Olukayode Ramos</p>
                  <p className="text-xs text-gray-500">CEO, Ramos Energy Limited</p>
                </div>
              </div>
            </div>
            <div className="power-gen-image">
              <img src="/images/img5.jpg" alt="Coal mining trucks at open-pit site" className="w-full h-[320px] md:h-[480px] lg:h-[560px] rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Coal Tenements and Exploration Progress */}
      <section className="tenement-section py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="tenement-image overflow-hidden rounded-2xl shadow-lg">
              <img src="/images/img6.jpg" alt="Coal tenements and mining site" className="w-full h-[320px] md:h-[480px] lg:h-[560px] object-cover rounded-2xl" />
            </div>

            <div className="tenement-content max-w-sm mx-auto md:mx-0">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Coal Tenements and Exploration Progress</h3>
              <p className="text-sm md:text-base text-gray-700 mb-4">Our Coal tenements for the Kogi state property are licensed under the Nigerian Minerals and Mining Act with Exploration license numbers 21493EL, 21363EL, 21834EL, 20188EL, 21496EL and 22598EL. Other exploration license numbers are 20415EL, 20957EL, 21493EL, 21497EL, 22489EL while the coal tenements for Delta coal property have Exploration License numbers 20981EL, 20982EL and 22598EL.</p>
              <p className="text-sm md:text-base text-gray-700">In 2015 MEL commenced a comprehensive geoscience/technical investigation and exploratory drilling program on its coal property in Kogi and Delta state. Till date a total number of 178 holes have been drilled at an average depth of 77meters and intercepted an average coal seam thickness of 1.3meters for Kogi and 10meters for Delta. The qualitative test conducted for the coal samples collected shows Kogi samples to have an average calorific value of 5842.71Kcal/kg and an average Sulphur content of 1.46% while Delta samples have an average calorific value of 4615.57Kcal/kg and an average Sulphur content of 0.66%.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
