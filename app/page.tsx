import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex items-center gap-4">
        <Link href="/power" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Energy & Power</Link>
        <Link href="/about" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">About</Link>
        <Link href="/mining" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Mining</Link>
         <Link href="/overview" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Overview</Link>
          <Link href="/Delta" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Delta</Link>
           <Link href="/Kogi" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Kogi</Link>
            <Link href="/Benue" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Benue</Link>
            <Link href="/Nassarawa" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Nassarawa</Link>
             <Link href="/Edo" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Edo</Link>
              <Link href="/Kogio" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Kogio</Link>
                <Link href="/Enugu" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Enugu</Link>
                <Link href="/Kogib" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Kogib</Link>
                <Link href="/Kaduna" className="px-6 py-3 rounded-full bg-red-600 text-white text-lg shadow">Kaduna</Link>
      </div>
    </div>
  );
}
