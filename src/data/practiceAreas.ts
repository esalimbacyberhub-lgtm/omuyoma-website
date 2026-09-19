export interface PracticeArea {
  slug: string;
  name: string;
  summary: string;
  detail: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "civil-commercial-litigation",
    name: "Civil & Commercial Litigation",
    summary: "Constitutional references, judicial review, and litigation before every court level.",
    detail:
      "Our litigation practice handles constitutional references and judicial review, civil and commercial disputes at the Court of Appeal, the High Court (Nairobi, Garissa, Eldoret, and Kisumu), Magistrates' Courts, and the Small Claims Court, alongside general property litigation, enforcement of arbitration awards, and insurance litigation.",
  },
  {
    slug: "property-conveyancing",
    name: "Property Law & Conveyancing",
    summary: "Real property transactions, transfers, leases, and securities for corporates and individuals.",
    detail:
      "Conveyancing is one of the firm's core areas of specialization. We handle all kinds of real property transactions for corporate and individual clients, including the preparation of transfers, licences, leases, sales, purchases, debentures, charges, and mortgages.",
  },
  {
    slug: "debt-recovery-insolvency",
    name: "Debt Recovery, Receiverships & Liquidation",
    summary: "Winding up, bankruptcy, liquidation, and debt collection, including defending vexatious claims.",
    detail:
      "The firm routinely handles winding up, bankruptcy, liquidation, debt collection, and receiverships, including preventive court action and defending clients against vexatious winding-up proceedings.",
  },
  {
    slug: "employment-labour",
    name: "Employment & Labour Law",
    summary: "Representation before the Employment and Labour Relations Court.",
    detail:
      "We represent clients in the settlement of employment disputes through litigation at the Employment and Labour Relations Court.",
  },
  {
    slug: "family-succession",
    name: "Family Law & Succession",
    summary: "Matrimonial matters, custody, and estate succession from wills to distribution.",
    detail:
      "We handle matrimonial cases including divorce, custody, and settlement of matrimonial property and adoption, alongside estate succession work — wills, petitions for grant of letters of administration, asset recovery, and distribution.",
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property Law",
    summary: "Trademarks, patents, designs, and enforcement against infringement.",
    detail:
      "Our established intellectual property practice covers trademark and patent application procedures, protection of trademarks, service marks, patents, designs, and copyright, passing off, geographical indications, and enforcement against infringement, violations, and licensing disputes.",
  },
  {
    slug: "adr",
    name: "Alternative Dispute Resolution",
    summary: "Arbitration and mediation, in both representative and adjudicative roles.",
    detail:
      "The firm actively participates in arbitration and mediation in both a representative and adjudicative capacity, encouraging clients toward out-of-court settlement where appropriate to promote speedy resolution and reduce legal costs.",
  },
  {
    slug: "contract-law",
    name: "Contract Law",
    summary: "Commercial, building, employment, and corporate contracts and disputes.",
    detail:
      "We arrange and advise on commercial, building, management, employment, and corporate contracts, and litigate for redress of breach — including disputes in building contracts, consultancy services, and the sale, delivery, and carriage of goods.",
  },
];
