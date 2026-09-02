// -----------------------------------------------------------------------------
// All external imagery lives here so it is easy to swap for the company's own
// licensed photos. Replace any URL with a local path such as
// "/images/hero.jpg" after dropping the file into /public/images.
//
// Current photos are royalty-free logistics images served from the Unsplash CDN.
// Every <Media> element also renders a branded blue gradient behind the photo,
// so the layout still looks intentional if an image is ever unavailable.
// -----------------------------------------------------------------------------

const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export const img = {
  heroHome: u('1494412574643-ff11b0a5c1c3', 2000), // container terminal / port
  aboutPort: u('1578575437130-527eed3abbec'), // ship-to-shore cranes
  aboutTruck: u('1601584115197-04ecc0da31d7'), // aerial container yard
  ship: u('1605745341112-85968b19335b'), // cargo ship at sea
  plane: u('1436491865332-7a61a109cc05'), // aircraft above clouds
  warehouse: u('1553413077-190dd305871c'), // warehouse racking
  truck: u('1519003722824-194d4455a60c'), // highway freight truck
  customs: u('1554224155-8d04cb21cd6c'), // documents / paperwork
  worker: u('1566576912321-d58ddd7a6088'), // warehouse professional
  containers2: u('1591768575198-88dac53fbd0a'), // container stacks
  forklift: u('1601598851547-4302969d0614'), // warehouse forklift
  team: u('1521737604893-d14cc237f11d'), // logistics team
  coverageMap: u('1451187580459-43490279c0fa'), // world / connectivity
  contactHero: `${import.meta.env.BASE_URL}images/contact-hero-port.png`, // local port, container and truck hero
}

// Per-service hero + card imagery
export const serviceImages = {
  'customs-clearing': u('1554224155-8d04cb21cd6c'),
  transportation: u('1519003722824-194d4455a60c'),
  'freight-forwarding': u('1494412574643-ff11b0a5c1c3'),
  'air-freight': u('1436491865332-7a61a109cc05'),
  warehousing: u('1553413077-190dd305871c'),
}
