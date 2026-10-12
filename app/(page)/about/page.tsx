
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const principles = [
  {
    number: "01",
    title: "Integrity first",
    description:
      "Clear communication, considered recommendations and a commitment to putting your interests at the centre of every conversation.",
  },
  {
    number: "02",
    title: "Specialist expertise",
    description:
      "A considered perspective shaped by local market knowledge, property fundamentals and an understanding of individual objectives.",
  },
  {
    number: "03",
    title: "Bespoke service",
    description:
      "Every client brings a different vision. Our approach adapts to your priorities, whether personal, family-led or investment-focused.",
  },
  {
    number: "04",
    title: "Long-term thinking",
    description:
      "We look beyond the immediate transaction, considering ownership, stewardship and how each decision fits into the bigger picture.",
  },
];

const markets = [
  "India",
  "Dubai",
  "London",
  "Scotland",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#343a31]">

      {/* Hero */}
      <section className="relative px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-16 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-10 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#777c63]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
              About IRIS Living Spaces
            </p>
          </motion.div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[88px]">
                Property, considered as{" "}
                <span className="italic text-[#777c63]">
                  personally
                </span>{" "}
                as it should be.
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="pb-2 lg:pb-3"
            >
              <p className="max-w-lg text-base leading-8 text-[#686b60] sm:text-lg">
                IRIS Living Spaces is a property and lifestyle advisory
                for people who value thoughtful decisions, trusted
                relationships and a more personal approach to real estate.
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-[#777c63]">
                India · Dubai · London · Scotland
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-[#deded4] bg-[#efeee7] px-5 py-10 sm:px-8 sm:py-14 lg:px-16">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4">
          {[
            { value: "18", suffix: "Years", label: "Experience" },
            { value: "400+", suffix: "", label: "HNI & NRI clients served" },
            { value: "₹4,200Cr+", suffix: "", label: "Portfolios advised and managed" },
            { value: "4", suffix: "", label: "International markets" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className="border-l border-[#c8c9bb] pl-4 sm:pl-6"
            >
              <p className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                {item.value}
                {item.suffix && (
                  <span className="ml-2 text-base italic text-[#777c63] sm:text-lg">
                    {item.suffix}
                  </span>
                )}
              </p>
              <p className="mt-3 max-w-[210px] text-xs leading-6 text-[#77786d] sm:text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Point of view */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
              Our point of view
            </p>
            <div className="mt-6 h-px w-16 bg-[#777c63]" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-serif text-6xl leading-none text-[#b5b8a6]">
              “
            </span>
            <blockquote className="-mt-1 max-w-3xl font-serif text-3xl leading-[1.3] tracking-tight sm:text-4xl md:text-5xl">
              We are not here to show you everything. We help you identify{" "}
              <span className="italic text-[#777c63]">
                what is worth considering.
              </span>
            </blockquote>
            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#74756a] sm:text-base">
              The right property decision is rarely just about a location
              or a price. It is about understanding the purpose behind
              the decision and finding the opportunities that genuinely
              fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-[#e9e9df] px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
                Built on relationships
              </p>
              <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Discernment is deeply personal.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl lg:pt-10"
            >
              <p className="text-base leading-8 text-[#686b60] sm:text-lg">
                Important property decisions rarely begin with a search
                filter. They begin with context: family, ambition,
                lifestyle, capital and time.
              </p>
              <p className="mt-5 text-base leading-8 text-[#686b60] sm:text-lg">
                Our approach brings together local market understanding
                and a broader view of acquisition, ownership, management
                and development. Each relationship is approached with
                discretion, patience and continuity.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid border-t border-[#c9cabe] sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="border-b border-[#c9cabe] py-7 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0 lg:py-9 lg:first:pl-0"
              >
                <span className="text-xs tracking-[0.2em] text-[#858777]">
                  {principle.number}
                </span>
                <h3 className="mt-5 font-serif text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-4 pr-4 text-sm leading-7 text-[#74756a]">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global perspective */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative aspect-[4/4.5] overflow-hidden"
          >
            <Image
              src="https://iris-living-spaces.lovable.app/assets/market-london-mayfair-CQPSYmuc.jpg"
              alt="Elegant architecture representing the international property markets served by IRIS"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:pl-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
              A connected perspective
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Local understanding. A wider view.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#74756a]">
              Property ownership can cross borders, generations and
              different ways of living. We connect perspectives across
              four distinct markets while recognising that every location
              and every client has its own considerations.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-y-5 border-t border-[#deded4] pt-7">
              {markets.map((market, index) => (
                <div key={market} className="flex items-center gap-3">
                  <span className="text-xs text-[#999b8b]">
                    0{index + 1}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl">
                    {market}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/global-markets"
              className="mt-9 inline-flex items-center gap-4 border-b border-[#777c63] pb-2 text-xs uppercase tracking-[0.18em] transition-colors hover:text-[#777c63]"
            >
              Explore our markets
              <span aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Roots & Legacy */}
      <section className="bg-[#343a31] text-[#f7f5f0]">
        <div className="grid lg:min-h-[560px] lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[320px] sm:min-h-[440px]"
          >
            <Image
              src="/Images/property4.jpeg"
              alt="Natural landscape reflecting a long-term commitment to place and stewardship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#20251e]/20" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 xl:px-24"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4c7b5] sm:text-xs">
              Roots & Legacy
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A living commitment.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/70 sm:text-base">
              Our connection to property extends beyond buildings. Roots
              & Legacy reflects a commitment to the places and communities
              we share, with an initiative to plant at least 500 native
              trees every year.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-8 text-white/70 sm:text-base">
              The focus is on choosing appropriate native species,
              working alongside communities and following progress
              beyond planting day.
            </p>

            <Link
              href="/roots-legacy"
              className="mt-9 inline-flex w-fit items-center gap-4 border-b border-[#c4c7b5] pb-2 text-xs uppercase tracking-[0.18em] transition-colors hover:text-[#c4c7b5]"
            >
              Explore our commitment
              <span aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="px-5 py-24 text-center sm:px-8 sm:py-32 lg:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
            Private consultation
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Exceptional decisions begin in{" "}
            <span className="italic text-[#777c63]">confidence.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#74756a] sm:text-base">
            Tell us what you are considering. Start a conversation with
            IRIS and let us understand what matters to you.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-[#343a31] px-7 py-4 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#777c63]"
            >
              Request a private consultation
              <span className="ml-5" aria-hidden="true">↗</span>
            </Link>

            <a
              href="https://wa.me/91981013400"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-[#c9cabe] px-7 py-4 text-xs uppercase tracking-[0.15em] transition-colors hover:border-[#777c63] hover:text-[#777c63]"
            >
              WhatsApp IRIS
              <span className="ml-5" aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
