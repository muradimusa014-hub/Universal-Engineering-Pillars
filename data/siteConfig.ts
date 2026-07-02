export const siteConfig = {
  companyName: "Syal Engineering Ltd",
  colors: {
    primary: "bg-slate-900", 
    primaryHover: "hover:bg-slate-800",
    textHighlight: "text-amber-500", // Construction Amber
  },
  contact: {
    phone: "+234 806 076 9201", // Syal's actual scraped number
    email: "projects@syalengineering.com",
    address: "Zaria Road, Kaduna, Nigeria",
    whatsappMessage: "Hello, I would like to request a consultation regarding an upcoming project."
  },
  forms: {
    contactApiKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", 
    newsletterSuccessMessage: "You have been added to our procurement updates list."
  },
  about: {
    title: "Engineering the Future",
    description: "We are a premier heavy engineering and infrastructure development firm operating across the Kaduna-Zaria axis.",
    mission: "To deliver structurally flawless projects on time, within budget, and strictly above national safety standards.",
    
    // Completely dynamic for Muradi to change per client
    coreValues: [
      { title: "Safety First", description: "Zero-compromise HSE protocols on every active site." },
      { title: "Precision", description: "Exacting standards from blueprint to foundation." }
    ],
    milestones: [
      { year: "Phase 1", title: "Regional Expansion", desc: "Solidified operations across the Kaduna-Zaria industrial corridor." },
      { year: "Phase 2", title: "Heavy Machinery", desc: "Acquired a robust fleet of industrial-grade equipment for large-scale procurement." },
      { year: "Phase 3", title: "Infrastructure Dominance", desc: "Recognized as a leading contractor for high-tier development projects." }
    ]
  }
};