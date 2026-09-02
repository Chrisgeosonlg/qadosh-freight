import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { contact } from '../data/site'

export default function Privacy() {
  const email = contact.emails[0]
  return (
    <>
      <Seo title="Privacy Policy | Qadosh Freight Solutions Limited" description="Learn how Qadosh Freight Solutions Limited collects, uses and protects personal information." path="/privacy" />
      <PageHero eyebrow="Your privacy" title="Privacy Policy" subtitle="How we collect, use and protect information when you visit our website or contact our team." image={`${import.meta.env.BASE_URL}images/contact-hero-port.png`} crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
      <section className="section section--tight">
        <article className="wrap policy">
          <p className="policy__updated">Last updated: 2 September 2026</p>
          <h2>1. Who we are</h2>
          <p>Qadosh Freight Solutions Limited is a freight forwarding, customs clearing, transportation and logistics company based in Dar es Salaam, Tanzania. This policy explains how we handle personal information through this website and our business communications.</p>
          <h2>2. Information we collect</h2>
          <p>When you request a quotation, send an enquiry or contact us, we may collect your name, company, email address, telephone number, preferred contact method, shipment origin and destination, cargo information, and any message or documents you choose to provide.</p>
          <p>Our website may also receive basic technical information such as browser type, device type, IP address and pages requested through normal server logs.</p>
          <h2>3. How we use information</h2>
          <ul><li>To respond to enquiries and prepare freight quotations.</li><li>To arrange and manage requested logistics services.</li><li>To communicate shipment, documentation and service updates.</li><li>To maintain security, prevent misuse and improve our website.</li><li>To meet applicable legal, customs, tax and regulatory obligations.</li></ul>
          <h2>4. How we share information</h2>
          <p>We may share information only where necessary with shipping lines, airlines, transporters, warehouse providers, customs authorities, regulators, technology providers and professional advisers involved in delivering or supporting a requested service. We do not sell personal information.</p>
          <h2>5. Cookies and local storage</h2>
          <p>The current website stores your consent preference in your browser so the consent banner does not repeatedly appear. We do not currently use advertising cookies. If analytics or other optional cookies are introduced, they should remain disabled until you provide the appropriate consent.</p>
          <h2>6. Data retention and security</h2>
          <p>We retain personal information only for as long as reasonably required to provide services, handle enquiries, maintain business records and meet legal obligations. We use reasonable organisational and technical safeguards, but no internet transmission or storage system can be guaranteed completely secure.</p>
          <h2>7. Your rights</h2>
          <p>Subject to applicable Tanzanian law, including the Personal Data Protection Act, 2022, you may ask to access, correct or delete your personal information, or object to or restrict certain processing. Some information may need to be retained where required by law or an active service agreement.</p>
          <h2>8. External services and international transfers</h2>
          <p>Links such as WhatsApp open third-party services governed by their own privacy terms. Freight services may also require information to be processed outside Tanzania when cargo moves internationally. Where applicable, we take reasonable steps to ensure such handling is appropriate and lawful.</p>
          <h2>9. Children</h2>
          <p>Our services are intended for businesses and adults. We do not knowingly request personal information from children through this website.</p>
          <h2>10. Changes to this policy</h2>
          <p>We may update this policy when our website, services or legal responsibilities change. The latest version and its effective date will be posted on this page.</p>
          <h2>11. Contact us</h2>
          <p>For privacy questions or requests, email <a href={`mailto:${email}`}>{email}</a> or write to Qadosh Freight Solutions Limited, {contact.address.full}.</p>
          <aside className="policy__notice">This website policy is general operational information and should be reviewed by a qualified Tanzanian legal professional before production launch.</aside>
        </article>
      </section>
    </>
  )
}
