import React from "react";

export default function AboutUs(): JSX.Element {
  return (
    <section id="about-us" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Left column: badge, heading, description, signature */}
          <div className="space-y-6">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">About Us</span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Empowering Industries to Solve Everyday Challenges</h2>

            <p className="text-gray-700 leading-relaxed">
              Mosra Energy Limited (MEL) is a well-established coal mining company with over 15 years
              experience in the industry. We operate coal mines in Kogi and Delta States and hold
              multiple exploration licences across other regions. Our services span exploration,
              development, permitting and contractor management to deliver safe, compliant operations.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="/images/CEO.png" alt="Olukayode Ramos" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold">Olukayode Ramos</div>
                <div className="text-sm text-gray-600">CEO, Mosra Energy Limited</div>
              </div>
            </div>

          </div>

          {/* Middle column: image */}
          <div className="flex justify-center md:justify-center">
            <div className="overflow-hidden rounded-3xl w-full max-w-md md:max-w-none">
              <img src="/images/Abt-image.png" alt="Team at work" className="w-full h-[320px] md:h-[420px] object-cover rounded-3xl" />
            </div>
          </div>

          {/* Right column: vision and mission */}
          <div className="space-y-6">
            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold">Our Vision</h4>
              <p className="text-gray-700 text-sm mt-3">
                Our purpose—to positively impact lives, transform communities and make the world a
                better place—unites professionals working collaboratively across a broad range of disciplines.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h4 className="font-semibold">Our Mission</h4>
              <p className="text-gray-700 text-sm mt-3">
                Our core values recognize that our business success is founded upon a commitment to
                innovation, integrity, empowerment, sustainability, collaboration and excellence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
