import LegalPageLayout from "@/app/components/LegalPageLayout";


const sections = [
  {
    title: "1. General Information Only",
    paragraphs: [
      "The content on the IRIS Living Spaces website is provided for general informational and discussion purposes. It is not a substitute for professional advice tailored to your circumstances.",
      "Although reasonable care may be taken in preparing website content, we make no general guarantee that every statement is complete, current or suitable for a particular decision.",
    ],
  },
  {
    title: "2. Property and Market Information",
    paragraphs: [
      "Property descriptions, photographs, locations, amenities, prices, market observations and availability may be indicative, illustrative or supplied by third parties. Images may not represent the exact property, current condition or final specification.",
      "Market conditions and property information can change without notice. Always verify material facts, ownership, title, permissions, planning restrictions, condition, area, taxes and transaction terms with appropriately qualified professionals.",
    ],
  },
  {
    title: "3. Investment Risk",
    paragraphs: [
      "Real estate is subject to market, liquidity, interest-rate, financing, maintenance, tenant, regulatory, taxation and currency risks. Capital values and income are not guaranteed, and you may lose money.",
      "Any reference to potential returns, historical performance, development prospects or future value is not a promise or assurance of results. No investment decision should be based solely on material published on this website.",
    ],
  },
  {
    title: "4. No Legal, Tax or Financial Advice",
    paragraphs: [
      "The website does not provide personalised legal, tax, accounting, mortgage or regulated financial advice. Requirements differ between jurisdictions, and cross-border property ownership may involve additional reporting, ownership, inheritance, residency and tax considerations.",
      "Consult qualified professionals authorised to advise in the relevant jurisdiction before making decisions or entering into a transaction.",
    ],
  },
  {
    title: "5. No Guarantee of Outcomes",
    paragraphs: [
      "References to advisory capabilities, services, opportunities, introductions or potential transactions do not guarantee that a property will be available, a transaction will complete, financing will be secured or a particular result will be achieved.",
      "Any scope of work, fee, commission, responsibility or service commitment should be confirmed in the applicable written agreement.",
    ],
  },
  {
    title: "6. Third-Party Content",
    paragraphs: [
      "External links, third-party statements, images, property listings and other materials may be included for context or convenience. Their presence does not necessarily imply endorsement, and IRIS Living Spaces does not warrant the accuracy or availability of external content.",
    ],
  },
  {
    title: "7. Limitation",
    paragraphs: [
      "To the extent permitted by applicable law, IRIS Living Spaces disclaims liability for loss arising from reliance on general website information or from the use of third-party content. This disclaimer does not exclude liability that cannot legally be excluded or restrict rights that applicable law protects.",
    ],
  },
  {
    title: "8. Contact and Clarification",
    paragraphs: [
      "If you require clarification about information on this website or wish to discuss a specific property enquiry, contact IRIS Living Spaces directly. A discussion does not replace independent due diligence or professional advice.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal · Disclaimer"
      title="Information with perspective."
      introduction="Please read this disclaimer before relying on property information, market commentary or service descriptions published by IRIS Living Spaces."
    >
      {sections.map((section) => (
        <section key={section.title} className="mb-10 last:mb-0">
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <section className="mt-12 border-t border-[#deded4] pt-8">
        <h2>Contact IRIS Living Spaces</h2>
        <p>
          Email:{" "}
          <a href="mailto:Info@irislivingspaces.in">
            Info@irislivingspaces.in
          </a>
        </p>
        <p>
          Phone: <a href="tel:+91981013400">+91 98101 3400</a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
