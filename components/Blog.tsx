import React from "react";

export default function Blog(): JSX.Element {
  return (
    <section id="blog" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Blog</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">Insights & Updates</h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and innovations in mining, energy, and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <article className="md:col-span-2 overflow-hidden rounded-3xl relative shadow-md bg-gray-50">
            <img src="/images/gal5.jpg" alt="Main article" className="w-full h-[280px] md:h-[360px] object-cover rounded-3xl" />
            <div className="absolute left-6 bottom-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold">The Future of Mining in Africa: Opportunities &amp; Challenges</h3>
              <p className="text-xs md:text-sm mt-2 max-w-xl">As global demand for critical minerals grows, the continent is poised to play a leading role in powering the world's clean energy transition.</p>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <article className="overflow-hidden rounded-2xl relative shadow-md bg-gray-50 h-[140px] md:h-[170px]">
              <img src="/images/gal3.png" alt="article 2" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute left-4 bottom-4 text-white">
                <h4 className="text-sm font-semibold">Sustainability at the Core: Mosra Energy’s Commitment</h4>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl relative shadow-md bg-gray-50 h-[140px] md:h-[170px]">
              <img src="/images/gal4.png" alt="article 3" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute left-4 bottom-4 text-white">
                <h4 className="text-sm font-semibold">Why Partnerships Are Key to Building a Strong Energy Future</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full">View all Blogs</button>
        </div>
      </div>
    </section>
  );
}
