"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, HardHat } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg ${siteConfig.colors.primary} text-white group-hover:scale-105 transition-transform`}>
              <HardHat size={24} />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              {siteConfig.companyName}
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-slate-600 hover:text-amber-600 font-semibold transition-colors">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-amber-600 font-semibold transition-colors">Corporate Profile</Link>
            <Link href="/contact" className="text-slate-600 hover:text-amber-600 font-semibold transition-colors">Contact</Link>
            
            <Link 
              href="/contact" 
              className={`${siteConfig.colors.primary} ${siteConfig.colors.primaryHover} text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md`}
            >
              Request Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 hover:text-amber-600 transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 font-semibold hover:bg-slate-50 rounded-lg">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 font-semibold hover:bg-slate-50 rounded-lg">Corporate Profile</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 font-semibold hover:bg-slate-50 rounded-lg">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}