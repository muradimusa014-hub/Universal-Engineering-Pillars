import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { Building, HardHat, Truck, Ruler, ArrowRight, CheckCircle2 } from "lucide-react";

// Helper to map string names from data to actual Lucide components
const IconMap = {
  Building: Building,
  HardHat: HardHat,
  Truck: Truck,
  Ruler: Ruler,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      
      {/* 1. HEAVY IMPACT HERO SECTION */}
      <section className="relative min-h-[85vh] py-32 flex flex-col items-center justify-center">
        
        {/* The Background */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1485965373059-f07657e9f841?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Engineering Site" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* The Content (z-20 ensures it stays on top and clickable) */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center">
          <span className={`inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8`}>
            {siteConfig.companyName}
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Building the Infrastructure of <span className={siteConfig.colors.textHighlight}>Tomorrow.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {siteConfig.about.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
            {/* Direct-to-WhatsApp RFQ Button */}
            <a 
              href={`https://wa.me/${siteConfig.contact.phone.replace(/\D/g,'')}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${siteConfig.colors.primary} ${siteConfig.colors.primaryHover} border border-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105 w-full sm:w-auto text-center`}
            >
              Request a Quote (RFQ)
            </a>
            
            <Link 
              href="/about" 
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto text-center"
            >
              Our Corporate Profile
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS BANNER */}
      <section className="bg-slate-900 border-t border-white/10 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-4 md:py-0">
              <p className={`text-4xl font-extrabold ${siteConfig.colors.textHighlight} mb-2`}>50+</p>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Projects Delivered</p>
            </div>
            <div className="py-4 md:py-0">
              <p className={`text-4xl font-extrabold ${siteConfig.colors.textHighlight} mb-2`}>10+</p>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Years Experience</p>
            </div>
            <div className="py-4 md:py-0">
              <p className={`text-4xl font-extrabold ${siteConfig.colors.textHighlight} mb-2`}>100%</p>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">HSE Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES MATRIX */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Core Engineering Services</h2>
          <div className={`w-24 h-1 mt-4 mx-auto ${siteConfig.colors.primary}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = IconMap[service.iconName];
            return (
              <div key={service.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className={`w-14 h-14 rounded-xl ${siteConfig.colors.primary} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 min-h-[48px]">{service.shortDescription}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.coreCapabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={18} className={`mr-2 mt-0.5 ${siteConfig.colors.textHighlight} shrink-0`} />
                      {capability}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={`inline-flex items-center text-sm font-bold ${siteConfig.colors.textHighlight} group-hover:opacity-80 transition-opacity`}>
                  Consult with an Engineer <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. HIGH CONTRAST CTA */}
      <section className={`${siteConfig.colors.primary} py-20`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Break Ground?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Submit your project specifications or bid requirements to our technical team for a comprehensive engineering assessment.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Submit Project Details
          </Link>
        </div>
      </section>

    </main>
  );
}
