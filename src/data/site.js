// -----------------------------------------------------------------------------
// Central company data. Update contact details, coverage, or copy here and it
// propagates across every page.
// -----------------------------------------------------------------------------

export const company = {
  name: 'Qadosh Freight Solutions Limited',
  shortName: 'Qadosh Freight',
  tagline: 'Moving your business forward, from port to premise.',
  registeredYear: 2019,
  website: 'www.qadoshfreight.co.tz',
  websiteUrl: 'https://www.qadoshfreight.co.tz',
  description:
    'A Dar es Salaam–based freight and customs clearing company delivering efficient, port-to-premise logistics across Tanzania and the wider African region.',
}

export const contact = {
  phones: [
    { display: '+255 22 2127326', tel: '+255222127326' },
    { display: '+255 766 775 255', tel: '+255766775255' },
    { display: '+255 717 039 133', tel: '+255717039133' },
  ],
  emails: ['info@qadoshfreight.co.tz'],
  address: {
    lines: ['Twiga House, Room No. 303', 'Plot No. 230/59, Block 291/59', 'Samora Avenue'],
    city: 'Dar es Salaam, Tanzania',
    full: 'Twiga House, Room No. 303, Plot No. 230/59, Block 291/59, Samora Avenue, Dar es Salaam, Tanzania',
  },
  // No confirmed public social profiles were provided — placeholders only.
  social: [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'X', href: '#', icon: 'x' },
  ],
}

// Countries where clearing / forwarding services are provided (service coverage,
// NOT physical offices — the only office is in Dar es Salaam).
export const coverage = [
  'Tanzania',
  'Uganda',
  'DR Congo',
  'Zambia',
  'Malawi',
  'Rwanda',
  'Burundi',
]

// Verified client figures from the company profile — nothing invented.
export const stats = [
  { value: 80, suffix: '', label: 'One-time customers' },
  { value: 20, suffix: '', label: 'Premium customers' },
]

export const coreValues = [
  {
    title: 'Customer-Centricity',
    icon: 'heart',
    tone: 'blue',
    text: 'We stay relentlessly focused on understanding and meeting the unique needs of every customer. Their success is our success.',
  },
  {
    title: 'Operational Excellence',
    icon: 'gauge',
    tone: 'red',
    text: 'We pursue continuous improvement and best-in-class performance across every part of our operation — from pickup and delivery to warehousing and inventory management.',
  },
  {
    title: 'Technological Innovation',
    icon: 'chip',
    tone: 'blue',
    text: 'We use modern technology to improve the customer experience, increase logistics efficiency and deliver industry-leading solutions.',
  },
  {
    title: 'Sustainability & Social Responsibility',
    icon: 'leaf',
    tone: 'blue',
    text: 'We are mindful of our environmental and social impact — working to reduce our carbon footprint, support local communities and contribute to the development of the regions we serve.',
  },
  {
    title: 'Integrity & Transparency',
    icon: 'shield',
    tone: 'red',
    text: 'We hold ourselves to the highest ethical standards, building trust through accountability and open communication with our customers, partners and stakeholders.',
  },
]

export const whyChoose = [
  { icon: 'pin', title: 'Strategic Dar es Salaam location', text: 'Our city-centre office sits close to the main port, customs service centre and key clearance points.' },
  { icon: 'globe', title: 'Established international network', text: 'We are supported by a well-established network of shipping lines and forwarding partners.' },
  { icon: 'map', title: 'Regional & international coverage', text: 'We clear and forward cargo across Tanzania and neighbouring East and Central African markets.' },
  { icon: 'heart', title: 'Customer-focused service', text: 'Every shipment is handled around your priorities, timelines and budget.' },
  { icon: 'route', title: 'Efficient port-to-premise solutions', text: 'We manage the full journey so your goods move smoothly from arrival to your door.' },
  { icon: 'box', title: 'Reliable cargo handling', text: 'Your consignments are handled carefully and moved through the correct channels.' },
  { icon: 'chat', title: 'Transparent communication', text: 'You stay informed at every stage, with clear updates and no surprises.' },
  { icon: 'lock', title: 'Secure warehousing', text: 'Our secure facilities keep your merchandise safe until you need it.' },
]

export const mission =
  'To exceed expectations by delivering specialised expertise that helps businesses move goods with time- and cost-efficient customs and logistics solutions — from port to premise, and back again.'

export const vision =
  'To be the leading provider of customs clearance and logistics solutions, known for reliability, efficiency and outstanding service to the businesses and communities we serve.'

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Contact Us', to: '/contact' },
]
