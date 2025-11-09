import React from "react";

export default function MiningPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero banner */}
      <section className="bg-[#FBEAE957] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h1 className="relative inline-block text-3xl md:text-4xl font-bold text-red-600 after:content-[''] after:block after:w-35 after:h-[1px] after:bg-red-600 after:mt-2">Mining</h1>
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
            <div className="power-gen-content">
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
              <img src="/images/img5.jpg" alt="Coal mining trucks at open-pit site" className="w-full h-[420px] md:h-[440px] lg:h-[420px] rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Coal Tenements and Exploration */}
      <section className="tenement-section py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-center">
            {/* Left Image */}
            <div className="tenement-image overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/img6.jpg"
                alt="Coal tenements and mining site"
                className="w-full h-[340px] md:h-[480px] lg:h-[560px] object-cover"
              />
            </div>

            {/* Right Text Content */}
            <div className="tenement-content text-gray-800">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
                Our Coal Tenements and Exploration Progress
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Our Coal tenements for the Kogi state property are licensed under the Nigerian Minerals and
                Mining Act with Exploration license numbers 21493EL, 21631EL, 21834EL, 20188EL, 21496EL and
                22589EL. Other exploration license numbers are 20415EL, 20957EL, 21493EL, 21497EL, 22489EL
                while the coal tenements for Delta coal property have Exploration License numbers 20981EL,
                20982EL and 22589EL.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                In 2015 MEL commenced a comprehensive geoscience/technical investigation and exploratory drilling
                program on its coal property in Kogi and Delta state. Till date a total number of 178 holes have
                been drilled at an average depth of 77 meters and intercepted an average coal seam thickness of
                1.3 meters for Kogi and 10 meters for Delta. The qualitative test conducted for the coal samples
                collected shows Kogi samples to have an average calorific value of 5842.71 Kcal/kg and an average
                Sulphur content of 1.46%, while Delta samples have an average calorific value of 4615.57 Kcal/kg
                and an average Sulphur content of 0.66%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 section-divider">
        <div className="border-t border-gray-300 w-full" />
      </div>

      {/* Tenement Development Activities (as screenshot) */}
      <section className="tenement-activities-section py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gray-700 text-base md:text-lg mb-8">
            To ensure development of the coal resources according to international best practices, MEL appointed
            Messrs Tata Consulting Engineers in late 2016 through a competitive bid process to conduct Preliminary
            Feasibility Studies (PFS) for the mine design and development for both Kogi and Delta coal properties.
            Other developmental activities undertaken by MEL to develop the Kogi and Delta tenements include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">01</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Conducting logistic studies to include option study for the transportation of Coal to coal power plants in the Northern part of Nigeria and Lignite to Lagos coastal power plants.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">02</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Conducting an Environmental and Social Impact Assessment for the exploration and mining operations.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">03</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Execution of the community development agreement.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">04</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Application for Mining Lease (ML) from the Federal Government of Nigeria.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">05</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">The supply of Coal to Ramos Electric Power Plants to be located in Campo, Benue State and Ukwu-nzu in Delta state. The power plants are designed to produce 1,000MW of electricity each with an initial capacity of 600MW.</p>
            </div>

            <div className="activity-card bg-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">06</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">The supply of coal to other coal power plants in the coastal part of Lagos and the Northern part of Nigeria.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
            <div className="activity-card">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">07</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">The supply of coal to Industrial users, particularly cement and bakery.</p>
            </div>

            <div className="activity-card">
              <div className="flex items-center gap-4 mb-4">
                <span className="activity-number font-semibold text-gray-600">08</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              <p className="text-sm text-gray-700">Supply of coal to domestic users in form of briquettes.</p>
            </div>
          </div>

          <p className="text-gray-700 text-base md:text-lg mt-8">
            MEL shall continue to pursue new opportunities in the Solid minerals and mining sector in Nigeria and shall strengthen its position within the market as a leading exploration and mining company.
          </p>
        </div>
      </section>


    </div>
  );
}
