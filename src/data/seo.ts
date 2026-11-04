export const siteUrl = "https://omuyomaadvocates.co.ke";

export const pageSeo: Record<string, { title: string; description: string }> = {
  "/": { title: "Nairobi Law Firm | Omuyoma & Co. Advocates", description: "Nairobi advocates offering civil litigation, property, corporate, employment, family and intellectual property legal services across Kenya." },
  "/about": { title: "About Our Nairobi Law Firm | Omuyoma Advocates", description: "Learn about Omuyoma & Co. Advocates, a Nairobi law firm built on professional excellence, personal commitment and integrity." },
  "/team": { title: "Nairobi Advocates | Our Legal Team", description: "Meet the advocates at Omuyoma & Co. Advocates, serving individuals and businesses in Nairobi and across Kenya." },
  "/practice-areas": { title: "Nairobi Legal Services | Practice Areas", description: "Explore legal services in Nairobi including litigation, property, corporate, employment, family and intellectual property law." },
  "/practice-areas/civil-litigation": { title: "Civil Litigation Nairobi | Omuyoma Advocates", description: "Civil and commercial litigation in Nairobi, including court disputes, judicial review, arbitration enforcement and insurance matters." },
  "/practice-areas/property": { title: "Property Law Nairobi | Omuyoma Advocates", description: "Nairobi property law and conveyancing for transfers, leases, sales, purchases and securities for individuals and businesses." },
  "/practice-areas/corporate": { title: "Corporate Law Nairobi | Omuyoma Advocates", description: "Corporate and commercial legal services in Nairobi, including company formation, business law and commercial contracts." },
  "/practice-areas/employment": { title: "Employment Law Nairobi | Omuyoma Advocates", description: "Employment and labour law advice and representation for workplace disputes in Nairobi and Kenya." },
  "/practice-areas/family": { title: "Family Law Nairobi | Omuyoma Advocates", description: "Family and succession law services in Nairobi, including matrimonial matters, custody, wills and estate administration." },
  "/practice-areas/intellectual-property": { title: "Intellectual Property Nairobi | Omuyoma Advocates", description: "Intellectual property advice in Nairobi covering trademarks, patents, designs, copyright, licensing and infringement." },
  "/insights": { title: "Legal Insights Nairobi | Omuyoma Advocates", description: "Legal commentary and updates from Omuyoma & Co. Advocates, a law firm based in Nairobi, Kenya." },
  "/contact": { title: "Contact Nairobi Advocates | Omuyoma & Co.", description: "Contact Omuyoma & Co. Advocates at Summit House, Moi Avenue, Nairobi to discuss your legal matter or book a consultation." },
  "/404": { title: "Page Not Found | Omuyoma Advocates Nairobi", description: "The requested page could not be found. Contact Omuyoma & Co. Advocates in Nairobi for assistance." },
};

export const legalService = {
  "@context": "https://schema.org", "@type": "LegalService", name: "Omuyoma & Co. Advocates",
  url: siteUrl, logo: `${siteUrl}/logo.png`, image: `${siteUrl}/logo.png`,
  address: { "@type": "PostalAddress", streetAddress: "Summit House, 4th Floor, Room 410, Moi Avenue", addressLocality: "Nairobi", postalCode: "00100", postOfficeBoxNumber: "24083", addressCountry: "KE" },
  telephone: "+254741159158", email: "admin@omuyomaadvocates.com", areaServed: [{ "@type": "City", name: "Nairobi" }, { "@type": "Country", name: "Kenya" }],
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "16:00" }],
  // TODO: add sameAs (verified social URLs) once confirmed. Omitted so no placeholder reaches the built HTML.
};
