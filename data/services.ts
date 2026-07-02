export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: "Building" | "HardHat" | "Truck" | "Ruler"; 
  coreCapabilities: string[];
}

export const services: Service[] = [
  {
    id: "civil-structural",
    title: "Civil & Structural Engineering",
    shortDescription: "End-to-end structural design and infrastructure development.",
    iconName: "Building",
    coreCapabilities: [
      "Foundation Engineering",
      "Steel & Concrete Detailing",
      "Structural Integrity Audits"
    ]
  },
  {
    id: "project-management",
    title: "Project & Site Management",
    shortDescription: "Complete oversight from groundbreaking to final handover.",
    iconName: "HardHat",
    coreCapabilities: [
      "Contractor Coordination",
      "HSE Compliance",
      "Quality Assurance Testing"
    ]
  },
  {
    id: "procurement",
    title: "Heavy Procurement & Logistics",
    shortDescription: "Sourcing and transporting industrial-grade materials.",
    iconName: "Truck",
    coreCapabilities: [
      "Supply Chain Optimization",
      "Heavy Machinery Rental",
      "Material Quality Verification"
    ]
  }
];