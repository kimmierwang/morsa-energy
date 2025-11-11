import React from "react";

export default function Expertise(): JSX.Element {
  return (
    <section id="expertise" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          <div>
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Expertise</span>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold">The Great Experience of Coal Mining</h2>

            <div className="mt-6 flex items-center gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-extrabold">250+</div>
                <div className="text-sm text-gray-600">Project Completed</div>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-extrabold">408+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>

            <p className="text-gray-700 mt-6 max-w-md">
              Internationally, coal is currently the most widely used primary fuel, accounting for approximately 40% of the world's electricity production. This situation is likely to remain until at least 2020.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs">Coal Exploration</span>
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs">Coal to Power</span>
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs">Other Related Projects</span>
            </div>

            <div className="mt-6">
              <button className="bg-red-600 text-white px-4 py-2 rounded-full">Learn More</button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-md">
              <img src="/images/img5.jpg" alt="Mining trucks" className="w-full h-[300px] md:h-[420px] object-cover rounded-3xl" />
            </div>

            {/* decorative notch */}
            <div className="absolute -bottom-6 left-6 w-40 h-10 bg-white rounded-t-xl shadow-sm hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
