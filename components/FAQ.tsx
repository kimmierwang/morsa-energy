"use client";
import React, { useEffect, useState } from "react";

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We serve mining, power generation, cement, construction, and industrial clients across West Africa, providing integrated services from exploration to delivery.",
  },
  {
    q: "Where does Mosra Energy operate?",
    a: "Mosra Energy Limited operates across several strategic mineral-rich regions in Nigeria, including Kogi, Nasarawa, Benue, and Kaduna States. Our projects span key resources such as coal, iron ore, and limestone.",
  },
  {
    q: "Do you handle both large-scale and smaller projects?",
    a: "Yes — we manage full lifecycle projects from feasibility and permitting to construction and operations, and we scale our teams to fit smaller specialist engagements.",
  },
  {
    q: "How does Mosra Energy ensure sustainability in its operations?",
    a: "We enforce strict environmental and safety standards, use modern equipment and practices to reduce emissions and impact, and engage local stakeholders to support sustainable development.",
  },
  {
    q: "What makes Mosra Energy different from other companies?",
    a: "Our combination of local knowledge, technical expertise, and integrated service offering ensures reliable supply and practical solutions tailored to each client's needs.",
  },
];

export default function FAQ(): JSX.Element {
  const [open, setOpen] = useState<number | null>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (!paused) {
        setOpen((prev) => {
          if (prev === null) return 0;
          return (prev + 1) % faqs.length;
        });
      }
    }, 4000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="faq" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">FAQs</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">Need Answers? We’ve Got You Covered</h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our operations, services, and project commitments.
          </p>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="space-y-4 max-w-3xl mx-auto"
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`border rounded-lg p-4 ${isOpen ? "bg-red-50 border-red-200" : "bg-white"}`}>
                <button
                  className="w-full text-left flex items-center justify-between gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
                </button>

                <div className={`mt-3 text-sm text-gray-700 transition-all ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
