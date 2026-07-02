import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { HardHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <HardHat className={siteConfig.colors.textHighlight} size={24} />
          <span className="text-xl font-bold text-white">{siteConfig.companyName}</span>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="text-slate-400 hover:text-amber-500 transition-colors">Home</Link>
          <Link href="/about" className="text-slate-400 hover:text-amber-500 transition-colors">Corporate Profile</Link>
          <Link href="/contact" className="text-slate-400 hover:text-amber-500 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}