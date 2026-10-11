
import LegalPageLayout from "@/app/components/LegalPageLayout";

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "These Terms & Conditions govern your access to and use of the IRIS Living Spaces website. By using this website, you agree to these terms. If you do not agree, please discontinue use of the website.",
      "Additional written terms or agreements may apply to specific advisory engagements or services. Where applicable, those agreements will govern the relevant engagement.",
    ],
  },
  {
    title: "2. Website Purpose",
    paragraphs: [
      "This website provides general information about IRIS Living Spaces, its property-related interests and its intended advisory services across India, Dubai, London and Scotland.",
      "Website content is provided for general informational purposes. Viewing the website or submitting an enquiry does not, by itself, establish an advisory, agency, brokerage, fiduciary or other professional relationship.",
    ],
  },
  {
    title: "3. No Offer or Guarantee",
    paragraphs: [
      "Property descriptions, images, market references, investment commentary and other materials are illustrative and may change without notice. Their inclusion does not constitute a binding offer, a guarantee of availability or a commitment to transact.",
      "Any transaction or engagement is subject to independent verification, relevant documentation, applicable law and any separately agreed written terms.",
    ],
  },
  {
    title: "4. Property Information",
    paragraphs: [
      "We aim to present information carefully, but property details, prices, availability, planning status, title information, rental estimates and market conditions may be incomplete, indicative, outdated or supplied by third parties.",
      "You should independently verify information material to your decision and obtain appropriate legal, tax, financial, technical and property advice before committing to a transaction.",
    ],
  },
  {
    title: "5. No Investment Advice",
    paragraphs: [
      "Nothing on this website constitutes regulated financial advice, tax advice, legal advice or a recommendation to purchase, sell, hold or finance a particular asset.",
      "Property values and income can rise or fall. Transactions may involve illiquidity, expenses, currency fluctuations, financing risk, regulatory changes and the possibility of loss. Past performance or indicative projections do not guarantee future results.",
    ],
  },
  {
    title: "6. User Responsibilities",
    paragraphs: [
      "You agree to use the website lawfully, provide accurate information when contacting us, avoid submitting malicious content, and not attempt to disrupt, compromise or gain unauthorised access to the website or its systems.",
      "You must not use the website to distribute unlawful material, impersonate another person or interfere with other users' access.",
    ],
  },
  {
    title: "7. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, website text, branding, design, graphics and original materials are owned by or used under licence by the relevant rights holders. They may not be copied, republished, commercially exploited or redistributed without permission, except where permitted by law.",
      "Third-party names, images and trademarks remain the property of their respective owners.",
    ],
  },
  {
    title: "8. Third-Party Services and Links",
    paragraphs: [
      "The website may contain links to third-party websites, mapping services, social platforms or messaging tools. We do not control those services and are not responsible for their content, availability, terms or privacy practices.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, IRIS Living Spaces will not be liable for indirect, incidental or consequential losses arising from the use of, or inability to use, this website or reliance on general website information.",
      "Nothing in these terms excludes or limits liability where doing so would be unlawful, including any liability that cannot legally be excluded under applicable consumer protection law.",
    ],
  },
  {
    title: "10. Indemnity",
    paragraphs: [
      "To the extent permitted by applicable law, you are responsible for losses or claims arising from your unlawful use of the website, your violation of these terms or your infringement of another person's rights.",
    ],
  },
  {
    title: "11. Website Availability",
    paragraphs: [
      "We may update, suspend or remove website content or functionality at any time. We do not guarantee uninterrupted availability or that the website will always be free from errors, vulnerabilities or harmful components.",
    ],
  },
  {
    title: "12. Applicable Law",
    paragraphs: [
      "These terms are subject to applicable laws. The appropriate governing law and dispute-resolution arrangements for any specific service or transaction may depend on the relevant parties, jurisdiction and separate written agreement.",
      "Nothing in this section removes any mandatory rights or protections that apply to you under the law.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms & Conditions from time to time. Updated terms will be published on this page with a revised date. Continued use of the website after an update constitutes use under the revised terms, to the extent permitted by law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal · Terms"
      title="Clear terms. Considered decisions."
      introduction="These terms explain the conditions for using the IRIS Living Spaces website and clarify the distinction between general website information and a separately agreed professional engagement."
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
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:Info@irislivingspaces.in">
            Info@irislivingspaces.in
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
