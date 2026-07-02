import { siteConfig } from "@/data/siteConfig";
import { Target, HardHat, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24">
      
      {/* SECTION 1: ABOUT US */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              {siteConfig.about.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {siteConfig.about.description}
            </p>
            
            <div className={`p-8 rounded-2xl bg-white border-l-4 ${siteConfig.colors.primary.replace('bg-', 'border-')} shadow-sm`}>
              <div className="flex items-center mb-3">
                <Target className={`${siteConfig.colors.textHighlight} mr-3`} size={24} />
                <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {siteConfig.about.mission}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.about.coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                {idx === 0 ? (
                  <ShieldCheck className={`${siteConfig.colors.textHighlight} mb-4`} size={32} />
                ) : (
                  <HardHat className={`${siteConfig.colors.textHighlight} mb-4`} size={32} />
                )}
                <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-sm text-slate-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: COMPANY TIMELINE */}
      <div className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Corporate Journey</h2>
            <div className={`w-24 h-1 mt-4 mx-auto ${siteConfig.colors.primary}`}></div>
          </div>

          <div className="space-y-12 border-l-2 border-slate-200 ml-4 md:ml-0 md:border-none md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {siteConfig.about.milestones.map((m, i) => (
              <div key={i} className="relative pl-8 md:pl-0 md:text-center group">
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${siteConfig.colors.primary} md:hidden`}></div>
                <div className="hidden md:block relative mb-8">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
                  <div className={`w-6 h-6 mx-auto rounded-full ${siteConfig.colors.primary} border-4 border-white shadow-sm group-hover:scale-125 transition-transform`}></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{m.year}</h3>
                <h4 className={`text-lg font-bold ${siteConfig.colors.textHighlight} mb-3`}>{m.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}