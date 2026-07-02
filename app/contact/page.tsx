"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    // Append the dynamic API key from our Data Brain
    formData.append("access_key", siteConfig.forms.contactApiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600">Get in touch with our executive team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* Left Side: Contact Info */}
          <div className={`${siteConfig.colors.primary} p-10 text-white flex flex-col justify-center`}>
            <h3 className="text-2xl font-bold mb-8">Direct Lines</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="mr-4 text-white/80" size={24} />
                <span className="text-lg">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 text-white/80" size={24} />
                <span className="text-lg">{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 text-white/80" size={24} />
                <span className="text-lg">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <CheckCircle size={64} className="text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h3>
                <p className="text-slate-600">Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Inquiry</label>
                  <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"></textarea>
                </div>
                {/* Honeypot for spam prevention */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full ${siteConfig.colors.primary} text-white font-bold py-4 rounded-lg transition-opacity ${isLoading ? 'opacity-70' : 'hover:opacity-90'}`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
      {/* Full Width Map Section - LAZY LOADED FOR SPEED */}
        <div className="mt-24 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-full h-[400px] rounded-xl overflow-hidden bg-slate-100 relative">
            {/* The absolute overlay prevents the map from catching the user's scroll wheel accidentally */}
            <div className="absolute inset-0 z-10 pointer-events-none border border-black/5 rounded-xl"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123!2d3.37!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
    </main>
  );
}