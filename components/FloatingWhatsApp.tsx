"use client";

import { siteConfig } from "@/data/siteConfig";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const { phone, whatsappMessage } = siteConfig.contact;

  // Strips out any non-numeric characters (like + or spaces) for the API link
  const cleanPhone = phone.replace(/\D/g, "");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Tooltip that appears on hover */}
      <span className="absolute right-16 bg-white text-slate-900 text-sm font-bold py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-slate-100 mr-2 peer-hover:opacity-100">
        Chat with us
      </span>

      {/* The Button */}
      <a
        href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="peer relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Subtle background pulse to draw attention */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
      </a>
    </div>
  );
}