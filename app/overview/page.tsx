// //<section className="project-showcase mt-16 relative">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

    
//       <div className="md:col-span-1">
//         <div className="activity-card bg-white">
//           <div className="flex items-center gap-4 mb-4">
//             <span className="activity-number font-semibold text-gray-600 text-lg">01</span>
//             <div className="flex-1 border-t border-gray-300" />
//           </div>
//         </div>

//         <h3 className="text-3xl font-bold text-gray-900 leading-snug">
//           Delta Lignite Coal Project
//         </h3>
//         <p className="text-base text-gray-700 mt-4 leading-relaxed">
//           Delta Lignite Coal Project is located within the Anagba-Ogwuashi lignite formation.
//           The project site covers multiple cadastral units and includes both surface and
//           near-surface mining opportunities. Our team provides full lifecycle services from
//           feasibility, permitting and design through to construction and site handover.
//         </p>
//       </div>

//       <div className="md:col-span-2">
//         <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
//           <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform translate-y-6">
//             <img
//               src="/images/pe6.jpg"
//               alt="Mining site aerial"
//               className="w-full h-[280px] md:h-[380px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
//             />
//           </div>
//           <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform -translate-y-6">
//             <img
//               src="/images/pe7.jpg"
//               alt="Coal truck and loader"
//               className="w-full h-[280px] md:h-[380px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 relative">
//     <button className="bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
//         viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
//       </svg>
//     </button>
//   </div>
// </section>


// <section className="investment-section py-16 bg-[#fafafa] mt-12">
//       <div className="max-w-full mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

//           {/* Left: Heading above image */}
//           <div>
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Looking To Make An Investment?
//             </h3>

//             <div className="relative overflow-hidden rounded-r-[120px] rounded-l-none shadow-md">
//               <img
//                 src="/images/img1.png"
//                 alt="Investment opportunity"
//                 className="block w-[110%] md:w-[200%] lg:w-[2000%] h-[200px] md:h-[300px] object-cover -ml-6 md:-ml-16 lg:-ml-32"
//               />
//             </div>
//           </div>

//           {/* Right: Intro above form */}
//           <div className="space-y-5">
//             <p className="text-sm md:text-base text-gray-700 leading-relaxed">
//               Connect with our Investor Relations team to learn more about current opportunities
//               and project performance.
//             </p>

//             <form className="space-y-4 mt-2 bg-white p-6 rounded-2xl shadow-sm">
//               <input
//                 name="name"
//                 placeholder="Name"
//                 className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//               <input
//                 name="email"
//                 placeholder="Email"
//                 className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//               <input
//                 name="phone"
//                 placeholder="Phone Number"
//                 className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 className="w-full border border-gray-200 rounded-md px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all duration-300"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 10l7-7m0 0l7 7M10 3v18"
//                     />
//                   </svg>
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
import Image from "next/image";
import React from "react";

export default function Overview() {
  return (
    <div className="bg-white text-gray-900">
      {/* --- Overview Section --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
              Overview
            </h1>
            <div className="w-16 h-[2px] bg-red-500 mb-4"></div>
          </div>

          {/* Right Paragraph */}
          <div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              From mining to power infrastructure, our projects reflect our
              commitment to innovation, responsible development, and national
              growth.
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
              Mining Projects & Site
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Key Developments and Mining Operations
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Mosra Energy Limited is developing key mining and energy projects
            across Nigeria, focused on powering growth through sustainable
            resource development. With active sites in Delta, Kogi, Benue,
            Nasarawa, Kaduna, and Edo States, our operations cover coal, iron
            ore, limestone, and granite. We combine technical expertise, modern
            exploration methods, and strong community partnerships to deliver
            reliable infrastructure and long-term energy solutions that drive
            industrial and economic progress.
          </p>
        </div>
      </section>

      {/* --- Project Showcase Section --- */}
      <section className="project-showcase mt-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Project Description */}
            <div className="md:col-span-1">
              <div className="activity-card bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="activity-number font-semibold text-gray-600 text-lg">
                    01
                  </span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Delta Lignite Coal Project
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed">
               Delta Lignite Coal Project is located within the Azagba-Ogwuashi lignite Formation and the assets comprises of two exploration license EL20981 and EL30273. EL20981 project site is located 
               within four communities (Ukwu-Nzu, Obomkpa, Ugboba and Ugbodu) in Aniocha
                North Local Government of Delta State approximately 10 km off Benin – Onitsha expressway covering 462 Cadastral Units (92.4 Km2) and EL30273 is located about 
                35 km from Asaba, Delta State capital in Ebu community, Oshimili North Local Government of Delta State, South-South Nigeria with total area coverage of 55 Cadastral Units (11 Km2).
              </p>
            </div>

            {/* Project Images */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform translate-y-6">
                  <Image
                    src="/images/pe6.jpg"
                    alt="Mining site aerial"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px]  object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform -translate-y-6">
                  <Image
                    src="/images/pe7.jpg"
                    alt="Coal truck and loader"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button with Custom SVG Icon */}
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 relative">
          <button className=" text-white rounded-full p-4  hover:bg-gray-800 transition">
            <Image
              src="/icons/icon.svg"
              alt="Next arrow icon"
              width={60}
              height={60}
            />
          </button>
        </div>
      </section>

       <section className="project-showcase mt-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Project Description */}
            <div className="md:col-span-1">
              <div className="activity-card bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="activity-number font-semibold text-gray-600 text-lg">
                    01
                  </span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Delta Lignite Coal Project
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed">
               Delta Lignite Coal Project is located within the Azagba-Ogwuashi lignite Formation and the assets comprises of two exploration license EL20981 and EL30273. EL20981 project site is located 
               within four communities (Ukwu-Nzu, Obomkpa, Ugboba and Ugbodu) in Aniocha
                North Local Government of Delta State approximately 10 km off Benin – Onitsha expressway covering 462 Cadastral Units (92.4 Km2) and EL30273 is located about 
                35 km from Asaba, Delta State capital in Ebu community, Oshimili North Local Government of Delta State, South-South Nigeria with total area coverage of 55 Cadastral Units (11 Km2).
              </p>
            </div>

            {/* Project Images */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform translate-y-6">
                  <Image
                    src="/images/pe6.jpg"
                    alt="Mining site aerial"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px]  object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform -translate-y-6">
                  <Image
                    src="/images/pe7.jpg"
                    alt="Coal truck and loader"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button with Custom SVG Icon */}
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 relative">
          <button className=" text-white rounded-full p-4  hover:bg-gray-800 transition">
            <Image
              src="/icons/icon.svg"
              alt="Next arrow icon"
              width={60}
              height={60}
            />
          </button>
        </div>
      </section>

       <section className="project-showcase mt-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Project Description */}
            <div className="md:col-span-1">
              <div className="activity-card bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="activity-number font-semibold text-gray-600 text-lg">
                    01
                  </span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Delta Lignite Coal Project
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed">
               Delta Lignite Coal Project is located within the Azagba-Ogwuashi lignite Formation and the assets comprises of two exploration license EL20981 and EL30273. EL20981 project site is located 
               within four communities (Ukwu-Nzu, Obomkpa, Ugboba and Ugbodu) in Aniocha
                North Local Government of Delta State approximately 10 km off Benin – Onitsha expressway covering 462 Cadastral Units (92.4 Km2) and EL30273 is located about 
                35 km from Asaba, Delta State capital in Ebu community, Oshimili North Local Government of Delta State, South-South Nigeria with total area coverage of 55 Cadastral Units (11 Km2).
              </p>
            </div>

            {/* Project Images */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform translate-y-6">
                  <Image
                    src="/images/pe6.jpg"
                    alt="Mining site aerial"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px]  object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform -translate-y-6">
                  <Image
                    src="/images/pe7.jpg"
                    alt="Coal truck and loader"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button with Custom SVG Icon */}
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 relative">
          <button className=" text-white rounded-full p-4  hover:bg-gray-800 transition">
            <Image
              src="/icons/icon.svg"
              alt="Next arrow icon"
              width={60}
              height={60}
            />
          </button>
        </div>
      </section>

       <section className="project-showcase mt-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Project Description */}
            <div className="md:col-span-1">
              <div className="activity-card bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="activity-number font-semibold text-gray-600 text-lg">
                    01
                  </span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Delta Lignite Coal Project
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed">
               Delta Lignite Coal Project is located within the Azagba-Ogwuashi lignite Formation and the assets comprises of two exploration license EL20981 and EL30273. EL20981 project site is located 
               within four communities (Ukwu-Nzu, Obomkpa, Ugboba and Ugbodu) in Aniocha
                North Local Government of Delta State approximately 10 km off Benin – Onitsha expressway covering 462 Cadastral Units (92.4 Km2) and EL30273 is located about 
                35 km from Asaba, Delta State capital in Ebu community, Oshimili North Local Government of Delta State, South-South Nigeria with total area coverage of 55 Cadastral Units (11 Km2).
              </p>
            </div>

            {/* Project Images */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform translate-y-6">
                  <Image
                    src="/images/pe6.jpg"
                    alt="Mining site aerial"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px]  object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform -translate-y-6">
                  <Image
                    src="/images/pe7.jpg"
                    alt="Coal truck and loader"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button with Custom SVG Icon */}
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 relative">
          <button className=" text-white rounded-full p-4  hover:bg-gray-800 transition">
            <Image
              src="/icons/icon.svg"
              alt="Next arrow icon"
              width={60}
              height={60}
            />
          </button>
        </div>
      </section>

               <section className="project-showcase mt-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Project Description */}
            <div className="md:col-span-1">
              <div className="activity-card bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="activity-number font-semibold text-gray-600 text-lg">
                    01
                  </span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Delta Lignite Coal Project
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed">
               Delta Lignite Coal Project is located within the Azagba-Ogwuashi lignite Formation and the assets comprises of two exploration license EL20981 and EL30273. EL20981 project site is located 
               within four communities (Ukwu-Nzu, Obomkpa, Ugboba and Ugbodu) in Aniocha
                North Local Government of Delta State approximately 10 km off Benin – Onitsha expressway covering 462 Cadastral Units (92.4 Km2) and EL30273 is located about 
                35 km from Asaba, Delta State capital in Ebu community, Oshimili North Local Government of Delta State, South-South Nigeria with total area coverage of 55 Cadastral Units (11 Km2).
              </p>
            </div>

            {/* Project Images */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform translate-y-6">
                  <Image
                    src="/images/pe6.jpg"
                    alt="Mining site aerial"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px]  object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform -translate-y-6">
                  <Image
                    src="/images/pe7.jpg"
                    alt="Coal truck and loader"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button with Custom SVG Icon */}
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 relative">
          <button className=" text-white rounded-full p-4  hover:bg-gray-800 transition">
            <Image
              src="/icons/icon.svg"
              alt="Next arrow icon"
              width={60}
              height={60}
            />
          </button>
        </div>
      </section>
             <section className="project-showcase mt-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Project Description */}
            <div className="md:col-span-1">
              <div className="activity-card bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="activity-number font-semibold text-gray-600 text-lg">
                    01
                  </span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Delta Lignite Coal Project
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed">
               Delta Lignite Coal Project is located within the Azagba-Ogwuashi lignite Formation and the assets comprises of two exploration license EL20981 and EL30273. EL20981 project site is located 
               within four communities (Ukwu-Nzu, Obomkpa, Ugboba and Ugbodu) in Aniocha
                North Local Government of Delta State approximately 10 km off Benin – Onitsha expressway covering 462 Cadastral Units (92.4 Km2) and EL30273 is located about 
                35 km from Asaba, Delta State capital in Ebu community, Oshimili North Local Government of Delta State, South-South Nigeria with total area coverage of 55 Cadastral Units (11 Km2).
              </p>
            </div>

            {/* Project Images */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform translate-y-6">
                  <Image
                    src="/images/pe6.jpg"
                    alt="Mining site aerial"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px]  object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform -translate-y-6">
                  <Image
                    src="/images/pe7.jpg"
                    alt="Coal truck and loader"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button with Custom SVG Icon */}
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 relative">
          <button className=" text-white rounded-full p-4  hover:bg-gray-800 transition">
            <Image
              src="/icons/icon.svg"
              alt="Next arrow icon"
              width={60}
              height={60}
            />
          </button>
        </div>
      </section>

     <section className="project-showcase mt-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Project Description */}
            <div className="md:col-span-1">
              <div className="activity-card bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="activity-number font-semibold text-gray-600 text-lg">
                    01
                  </span>
                  <div className="flex-1 border-t border-gray-300" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Delta Lignite Coal Project
              </h3>
              <p className="text-base text-gray-700 mt-4 leading-relaxed">
               Delta Lignite Coal Project is located within the Azagba-Ogwuashi lignite Formation and the assets comprises of two exploration license EL20981 and EL30273. EL20981 project site is located 
               within four communities (Ukwu-Nzu, Obomkpa, Ugboba and Ugbodu) in Aniocha
                North Local Government of Delta State approximately 10 km off Benin – Onitsha expressway covering 462 Cadastral Units (92.4 Km2) and EL30273 is located about 
                35 km from Asaba, Delta State capital in Ebu community, Oshimili North Local Government of Delta State, South-South Nigeria with total area coverage of 55 Cadastral Units (11 Km2).
              </p>
            </div>

            {/* Project Images */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform translate-y-6">
                  <Image
                    src="/images/pe6.jpg"
                    alt="Mining site aerial"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px]  object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl bg-gray-50 shadow-sm transform -translate-y-6">
                  <Image
                    src="/images/pe7.jpg"
                    alt="Coal truck and loader"
                    width={600}
                    height={800}
                    className="w-full  h-[340px] md:h-[460px] lg:h-[520px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button with Custom SVG Icon */}
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 relative">
          <button className=" text-white rounded-full p-4  hover:bg-gray-800 transition">
            <Image
              src="/icons/icon.svg"
              alt="Next arrow icon"
              width={60}
              height={60}
            />
          </button>
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
