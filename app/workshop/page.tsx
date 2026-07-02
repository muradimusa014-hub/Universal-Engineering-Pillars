// app/workshop/page.tsx
import { siteConfig } from "@/data/siteConfig";
import { Wrench, Calendar, Clock, ShieldCheck } from "lucide-react";

export default function Workshop() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Workshop Hero */}
      <div className="bg-slate-900 py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          The <span className={siteConfig.colors.textHighlight}>Service</span> Workshop
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          State-of-the-art diagnostics and maintenance for luxury vehicles and corporate fleets.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Service Info */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Service With Us?</h2>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <ShieldCheck size={28} className={siteConfig.colors.textHighlight} />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-slate-900">Certified Technicians</h4>
                <p className="text-slate-600 mt-2">Factory-trained experts using OEM diagnostic tools to ensure your vehicle runs at peak performance.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <Clock size={28} className={siteConfig.colors.textHighlight} />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-slate-900">Rapid Turnaround</h4>
                <p className="text-slate-600 mt-2">Dedicated bays for corporate fleets to minimize downtime and keep your operations moving.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <Wrench size={28} className={siteConfig.colors.textHighlight} />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-slate-900">Genuine Parts</h4>
                <p className="text-slate-600 mt-2">We strictly use authentic manufacturer parts backed by a comprehensive service warranty.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="lg:w-1/2">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Calendar size={24} className={`${siteConfig.colors.textHighlight} mr-3`} />
              <h3 className="text-2xl font-bold text-slate-900">Book an Appointment</h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="e.g. Fikrah" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="+234..." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Vehicle Make/Model</label>
                  <input type="text" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="e.g. Lexus LX600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Type</label>
                  <select className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-600">
                    <option>Routine Maintenance</option>
                    <option>Engine Diagnostics</option>
                    <option>Body & Paint</option>
                    <option>Corporate Fleet Servicing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Additional Notes</label>
                <textarea rows={4} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Please describe any specific issues..."></textarea>
              </div>
              
              <button type="button" className={`w-full ${siteConfig.colors.primary} ${siteConfig.colors.primaryHover} text-white font-bold py-4 rounded-lg shadow-md transition-all`}>
                Request Service Date
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}