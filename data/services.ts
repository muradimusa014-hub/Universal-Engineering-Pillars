export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: "Building" | "HardHat" | "Truck" | "Ruler"; 
  coreCapabilities: string[];
}

export const services: Service[] = [
  {
    id: "structural-reinforcement",
    title: "Foundation & Piling",
    shortDescription: "Advanced foundation piling to ensure absolute stability for high-rise projects.",
    iconName: "Building",
    coreCapabilities: [
      "Deep Foundation Drilling",
      "Reinforced Concrete Piling",
      "Subsurface Soil Stabilization"
    ]
  },
  {
    id: "site-surveying",
    title: "Topographical Surveying",
    shortDescription: "Precise structural mapping to guarantee optimal land utilization.",
    iconName: "Ruler",
    coreCapabilities: [
      "3D Terrain Mapping",
      "Geotechnical Soil Testing",
      "Boundary & Elevation Pegging"
    ]
  },
  {
    id: "integrity-testing",
    title: "Project Oversight & Testing",
    shortDescription: "Non-destructive testing and stress analysis for structural frameworks.",
    iconName: "HardHat",
    coreCapabilities: [
      "Concrete Strength Analysis",
      "Ultrasonic Flaw Detection",
      "Live-Load Stress Monitoring"
    ]
  }
];
