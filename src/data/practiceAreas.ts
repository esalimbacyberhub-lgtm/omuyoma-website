export interface PracticeArea {
  slug: string;
  name: string;
  summary: string;
  detail: string;
}

// Placeholder copy — replace with Omuyoma's confirmed list and descriptions.
export const practiceAreas: PracticeArea[] = [
  {
    slug: "litigation",
    name: "Civil Litigation",
    summary: "Representation before Kenyan courts and tribunals, from filing to judgment.",
    detail:
      "We act for clients in commercial disputes, contractual claims, and civil matters at every court level, managing each case from pleadings through to enforcement of judgment.",
  },
  {
    slug: "conveyancing",
    name: "Conveyancing & Property",
    summary: "Land transfers, title verification, and property transaction support.",
    detail:
      "Our conveyancing practice handles due diligence, transfer documentation, and registration for residential, commercial, and agricultural land transactions.",
  },
  {
    slug: "corporate",
    name: "Corporate & Commercial",
    summary: "Company formation, contracts, and ongoing legal counsel for businesses.",
    detail:
      "We advise businesses on incorporation, governance, commercial agreements, and regulatory compliance, acting as outside counsel for firms that need dependable legal support.",
  },
  {
    slug: "family-law",
    name: "Family Law",
    summary: "Succession, matrimonial matters, and guardianship proceedings.",
    detail:
      "We guide families through succession and probate, matrimonial disputes, and guardianship matters with attention to both the legal process and the people involved.",
  },
  {
    slug: "employment",
    name: "Employment Law",
    summary: "Advisory and representation on workplace disputes and policy.",
    detail:
      "We represent both employers and employees in disputes before the Employment and Labour Relations Court, and advise on contracts, policy, and termination procedure.",
  },
];
