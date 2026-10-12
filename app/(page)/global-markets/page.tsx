"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const markets = [
  {
    number: "01",
    name: "India",
    headline:
      "Lutyens’ Delhi, NCR farmhouses, South Mumbai, Goa and the Himalayan hills.",
    description:
      "From Lutyens’ Delhi and NCR farmhouses to South Mumbai, Goa villas and hill retreats, IRIS brings local context to residences, land and lifestyle assets.",
    image:
      "/Images/Property1.jpg",
    alt: "Tree-lined luxury residence in Lutyens' Delhi",
    locations: ["Lutyens’ Delhi", "NCR Farmhouses", "South Mumbai", "Goa", "Himalayan Hills"],
  },
  {
    number: "02",
    name: "Dubai",
    headline: "Palm Jumeirah, Downtown, DIFC and Business Bay.",
    description:
      "Across Palm Jumeirah, Downtown Dubai, DIFC and Business Bay, we consider developer quality, ownership objectives, location and timing together.",
    image:
      "/Images/Property2.jpg",
    alt: "Dubai waterfront residences and skyline at dusk",
    locations: ["Palm Jumeirah", "Downtown Dubai", "DIFC", "Business Bay"],
  },
  {
    number: "03",
    name: "London",
    headline: "Mayfair, Knightsbridge, the Cotswolds and Surrey Hills.",
    description:
      "In Mayfair, Knightsbridge and beyond London to the Cotswolds and Surrey Hills, neighbourhood nuance, asset quality and ownership structure remain essential.",
    image:
      "/Images/Property3.jpg",
    alt: "Elegant period residences in Mayfair, London",
    locations: ["Mayfair", "Knightsbridge", "The Cotswolds", "Surrey Hills"],
  },
  {
    number: "04",
    name: "Scotland",
    headline: "Edinburgh, Highland estates, lochside homes and distinguished rural retreats.",
    description:
      "Across Edinburgh and the Highlands, we consider provenance, stewardship, landscape and long-term ownership alongside the character of each estate.",
    image:
      "/Images/property4.jpeg",
    alt: "Historic stone estate beside a Scottish Highland loch",
    locations: ["Edinburgh", "Highland Estates", "Lochside Homes", "Rural Retreats"],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-medium tracking-[0.23em] text-[#777c63] sm:text-xs">
      {children}
    </span>
  );
}

export default function GlobalMarketsPage() {
  return (
    <>

      <main className="overflow-hidden bg-[#f7f5f0] text-[#252923]">
        {/* Hero */}
        <section className="relative flex min-h-[72svh] items-center overflow-hidden bg-[#343a31] text-white md:min-h-[680px]">
          <Image
            src="https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="International waterfront property and Dubai skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#171c17]/85 via-[#171c17]/55 to-[#171c17]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.14 },
              },
            }}
            className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 pt-32 sm:px-10 md:px-16 md:pt-36 xl:px-24"
          >
            <motion.div variants={reveal}>
              <span className="text-[10px] tracking-[0.25em] text-white/80 sm:text-xs">
                INDIA · DUBAI · LONDON · SCOTLAND
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-8xl lg:text-[104px]"
            >
              Four exceptional markets.
              <span className="mt-3 block italic text-[#e4dfd1]">
                One private perspective.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              Local expertise in India, Dubai, London and Scotland,
              connected by one clear understanding of your wider property
              goals.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-5 border border-[#f7f5f0] bg-[#f7f5f0] px-6 py-4 text-sm text-[#252923] transition-colors duration-300 hover:bg-transparent hover:text-white"
              >
                Speak to an Advisor
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>

              <a
                href="#markets"
                className="inline-flex items-center gap-3 text-sm text-white hover:text-[#e4dfd1]"
              >
                Explore the markets <span>↓</span>
              </a>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-6 right-6 z-10 flex items-center justify-between gap-4 border-t border-white/30 py-5 text-[8px] tracking-[0.15em] text-white/75 sm:left-10 sm:right-10 md:left-16 md:right-16 md:text-[10px] xl:left-24 xl:right-24">
            <span>GLOBAL PROPERTY ADVISORY</span>
            <span>FOUR MARKETS · ONE PERSPECTIVE</span>
          </div>
        </section>

        {/* Introduction */}
        <section className="grid gap-8 px-6 py-20 sm:px-10 md:grid-cols-[0.65fr_1.6fr] md:gap-12 md:px-16 md:py-28 xl:px-24">
          <div>
            <Eyebrow>THE GLOBAL PERSPECTIVE</Eyebrow>
          </div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Different markets.
              <span className="mt-2 block italic text-[#777c63]">
                Different considerations.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#686960]">
              International property decisions require more than identifying
              a desirable location. Neighbourhood characteristics, asset
              quality, ownership objectives and the local context all shape
              the opportunity.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#686960]">
              IRIS connects a private advisory perspective across four
              distinct markets, helping clients explore selected properties
              and consider how each opportunity aligns with their wider
              objectives.
            </p>
          </motion.div>
        </section>

        {/* Markets navigation */}
        <section
          id="markets"
          className="border-y border-[#252923]/10 bg-[#eae8df] px-6 py-8 sm:px-10 md:px-16 xl:px-24"
        >
          <div className="mx-auto flex max-w-[1400px] flex-wrap gap-x-8 gap-y-4">
            {markets.map((market) => (
              <a
                key={market.name}
                href={`#market-${market.number}`}
                className="group inline-flex items-center gap-3 text-sm text-[#55564f] transition-colors hover:text-[#777c63]"
              >
                <span className="text-[10px] text-[#777c63]">
                  {market.number}
                </span>
                {market.name}
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Individual markets */}
        <section className="px-6 py-16 sm:px-10 md:px-16 md:py-24 xl:px-24">
          <div className="mx-auto max-w-[1400px] space-y-20 md:space-y-28">
            {markets.map((market, index) => (
              <motion.article
                key={market.number}
                id={`market-${market.number}`}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className={`grid items-center gap-9 md:grid-cols-2 md:gap-16 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Market image */}
                <div className="group relative aspect-[4/3.7] overflow-hidden bg-[#e5e1d7]">
                  <Image
                    src={market.image}
                    alt={market.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 border border-white/60 bg-black/10 px-4 py-2 text-[9px] tracking-[0.2em] text-white backdrop-blur-sm">
                    {market.number} / GLOBAL MARKETS
                  </span>

                  <span className="absolute bottom-5 right-5 font-serif text-4xl text-white/90 sm:text-5xl">
                    {market.name}
                  </span>
                </div>

                {/* Market content */}
                <div className="py-3 md:py-8">
                  <Eyebrow>
                    {market.number} / {market.name.toUpperCase()}
                  </Eyebrow>

                  <h2 className="mt-6 font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    {market.headline}
                  </h2>

                  <p className="mt-6 text-sm leading-8 text-[#686960]">
                    {market.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {market.locations.map((location) => (
                      <span
                        key={location}
                        className="border border-[#252923]/15 px-3 py-2 text-[11px] text-[#55564f]"
                      >
                        {location}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?market=${market.name.toLowerCase()}`}
                    className="group mt-9 inline-flex items-center gap-4 border-b border-[#777c63] pb-2 text-sm"
                  >
                    Discuss {market.name}
                    <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Private consultation */}
        <section className="relative overflow-hidden bg-[#343a31] px-6 py-24 text-white sm:px-10 md:px-16 md:py-32 xl:px-24">
          <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-white/10 md:h-[520px] md:w-[520px]" />
          <div className="pointer-events-none absolute -right-10 -top-14 h-72 w-72 rounded-full border border-white/10 md:h-[390px] md:w-[390px]" />

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <Eyebrow>PRIVATE CONSULTATION</Eyebrow>

            <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
              Exceptional decisions begin in confidence.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/70">
              Tell us what you are considering. An IRIS advisor will get
              back to you personally to understand your objectives and
              discuss appropriate next steps.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-5 border border-[#f7f5f0] bg-[#f7f5f0] px-6 py-4 text-sm text-[#252923] transition-colors hover:bg-transparent hover:text-white"
              >
                Request a Private Consultation
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>

              <a
                href="https://wa.me/91981013400"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-3 border border-white/40 px-6 py-4 text-sm transition-colors hover:bg-white hover:text-[#252923]"
              >
                WhatsApp IRIS <span>↗</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}