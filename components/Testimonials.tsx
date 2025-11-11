"use client";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Mariam A",
    role: "Industry Partner",
    avatar: "/images/Abubakar.png",
    quote:
      "Mosra Energy has been a game-changer for our cement operations, providing consistent coal supply and dependable logistics. Their professionalism and responsiveness make them a valued partner.",
  },
  {
    name: "Ibrahim Suleiman",
    role: "Head of Operations, Mining Company",
    avatar: "/images/Daniel.png",
    quote:
      "We have found Mosra Energy to be a reliable supplier of high-quality coal and energy solutions, tailored to our industrial needs. Their technical expertise is unparalleled.",
  },
  {
    name: "Michael Adeyemi",
    role: "State Energy Official",
    avatar: "/images/Ramos.png",
    quote:
      "Mosra Energy's coal has been instrumental in our production process, burning clean and hot, which is ideal for our clay-based products. Their supply chain reliability has enabled us to scale production.",
  },
  {
    name: "Chuks O",
    role: "Corporate Partner",
    avatar: "/images/Abt-image1.png",
    quote:
      "The team's commitment to safety and environmental responsibilities has made working with Mosra Energy a positive experience for our projects.",
  },
  {
    name: "Aisha L",
    role: "Procurement Lead",
    avatar: "/images/gal6.png",
    quote:
      "Professional, timely deliveries and excellent communication. We trust Mosra Energy for critical supplies.",
  },
];

export default function Testimonials(): JSX.Element {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const calc = () => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.querySelector(".test-card") as HTMLElement | null;
      const gap = 24;
      const cardW = (card?.clientWidth ?? 320) + gap;
      setStep(cardW);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      if (!paused) setIndex((i) => (i + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = "transform 700ms ease";
    track.style.transform = `translateX(-${index * step}px)`;
  }, [index, step]);

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Testimonials</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">Stories of Trust, Quality and Commitment</h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Here's what our partners and clients say about working with Mosra Energy.
          </p>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={trackRef} className="flex gap-6 will-change-transform py-6">
            {testimonials.map((t, i) => (
              <div key={i} className="test-card min-w-[280px] md:min-w-[360px] bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 flex items-center gap-1">
                    <span>★★★★★</span>
                  </div>
                </div>

                <p className="text-gray-700 mt-4 text-sm">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
