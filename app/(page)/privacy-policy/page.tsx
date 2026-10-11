import LegalPageLayout from "@/app/components/LegalPageLayout";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "IRIS Living Spaces respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how information may be collected, used, stored and shared when you visit our website or contact us about our services.",
      "By using this website, you acknowledge this policy. Where consent is required by applicable law, we will seek it separately.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "Information you provide directly may include your name, email address, phone number, preferred property market, area of interest and the details you submit through a contact or consultation form.",
      "When you browse our website, technical information such as your browser type, device information, approximate location derived from your IP address, pages visited and basic usage data may be processed through server logs or analytics tools, where enabled.",
      "Please do not submit identity documents, bank details, account credentials or other sensitive information through a general website enquiry form.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: [
      "We may use the information we receive to respond to enquiries, arrange consultations, understand your property requirements, provide requested information, improve website functionality, protect our systems against misuse and comply with legal obligations.",
      "We will not use your contact details for unrelated marketing where consent or another lawful basis is required and has not been obtained.",
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "We do not sell your personal information. Information may be shared with authorised team members and service providers who help us operate the website, deliver communications, maintain security or provide requested services.",
      "Information may also be disclosed where required by law, to respond to lawful requests, to protect legal rights or in connection with a business reorganisation, subject to applicable legal requirements.",
      "Where a property enquiry requires engagement with a third-party professional or service provider, we will handle any sharing of your information in accordance with applicable law and any required permissions.",
    ],
  },
  {
    title: "5. Cookies and Similar Technologies",
    paragraphs: [
      "Our website may use essential technologies to support basic functionality and, if configured, analytics or preference cookies. You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.",
      "Any consent mechanism required for non-essential cookies will be implemented in accordance with applicable law.",
    ],
  },
  {
    title: "6. Data Retention and Security",
    paragraphs: [
      "We retain personal information for only as long as reasonably necessary for the purpose for which it was collected, including responding to enquiries, maintaining relevant records, resolving disputes and meeting legal requirements.",
      "We use reasonable technical and organisational safeguards to protect information. However, no internet transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "7. International Transfers",
    paragraphs: [
      "IRIS Living Spaces refers to property markets in India, Dubai, London and Scotland. If information is transferred across national borders, we will take steps required by applicable law to ensure that the transfer is appropriately protected.",
    ],
  },
  {
    title: "8. Your Rights",
    paragraphs: [
      "Depending on your location and applicable law, you may have rights to access, correct, update, delete or obtain a copy of your personal information, withdraw consent where processing relies on consent, or raise an objection or complaint.",
      "To make a privacy-related request, contact us using the details below. We may need to verify your identity before responding and may retain information where the law permits or requires us to do so.",
    ],
  },
  {
    title: "9. Third-Party Websites",
    paragraphs: [
      "Our website may link to external websites, social platforms or messaging services. Those services operate under their own privacy policies and practices. We are not responsible for the privacy or security practices of third-party websites.",
    ],
  },
  {
    title: "10. Children's Privacy",
    paragraphs: [
      "This website is intended for a general audience seeking property-related information and is not directed at children. We do not knowingly collect children's personal information in circumstances where doing so would be unlawful.",
    ],
  },
  {
    title: "11. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy when our practices, services or legal obligations change. The latest version will be published on this page with its updated date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal · Privacy"
      title="Your privacy matters."
      introduction="A clear explanation of how IRIS Living Spaces handles information when you visit our website or contact us about a property enquiry."
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
        <h2>Privacy enquiries</h2>
        <p>
          For questions or requests concerning your personal information,
          contact IRIS Living Spaces:
        </p>
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
