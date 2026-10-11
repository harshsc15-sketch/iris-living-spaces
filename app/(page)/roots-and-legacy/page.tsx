
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
    title: "Native by nature",
    description:
      "Prioritise locally appropriate native species that are suited to the climate, soil and surrounding ecosystem.",
  },
  {
    number: "02",
    title: "Rooted in place",
    description:
      "Work towards initiatives that respect local landscapes, strengthen connections with communities and support biodiversity.",
  },
  {
    number: "03",
    title: "Beyond planting day",
    description:
      "Consider watering, maintenance and survival monitoring so planting efforts have a better chance of lasting.",
  },
  {
    number: "04",
    title: "A long-term view",
    description:
      "Treat environmental stewardship as an ongoing responsibility rather than a one-day activity or short-term campaign.",
  },
];

export default function RootsAndLegacyPage() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#343a31]">

      {/* Hero */}
      <section className="px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-16 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-350">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#777c63]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
              Roots & Legacy
            </p>
          </motion.div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-4xl font-serif text-5xl leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              A legacy that
              <br />
              grows{" "}
              <span className="italic text-[#777c63]">beyond us.</span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="pb-2"
            >
              <p className="max-w-lg text-base leading-8 text-[#74756a] sm:text-lg">
                Property connects us to places. Roots & Legacy reflects
                our belief that caring for those places should be part
                of how we think about the future.
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#777c63]">
                Place · Nature · Responsibility
              </p>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-12 aspect-[4/3] overflow-hidden sm:mt-16 sm:aspect-[16/7]"
          >
            <Image
              src="https://iris-living-spaces.lovable.app/assets/market-scotland-highlands-BWM5P4Dl.jpg"
              alt="A natural landscape representing the connection between place and environmental stewardship"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#20251e]/65 via-[#20251e]/10 to-transparent" />

            <div className="absolute bottom-7 left-6 max-w-2xl text-white sm:bottom-12 sm:left-12 lg:bottom-14 lg:left-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/75 sm:text-xs">
                Looking beyond the present
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                The places we value deserve our care.
              </h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Purpose */}
      <section className="border-y border-[#deded4] bg-[#efeee7] px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-300 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
              Why it matters
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              A thoughtful relationship with the land.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:pt-10"
          >
            <p className="text-base leading-8 text-[#686b60] sm:text-lg">
              The value of a place extends beyond its boundaries. Its
              trees, soil, water, wildlife and communities contribute to
              the character that makes it meaningful.
            </p>
            <p className="mt-5 text-base leading-8 text-[#686b60] sm:text-lg">
              Roots & Legacy is the environmental stewardship initiative
              of IRIS Living Spaces. Its ambition is to encourage
              responsible planting, favour native species where suitable
              and support the long-term care of the landscapes around us.
            </p>
            <p className="mt-5 text-base leading-8 text-[#686b60] sm:text-lg">
              We see this as an ongoing commitment: measured not only by
              the number of trees planted, but also by the care, context
              and follow-through behind every effort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tree initiative */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-3000 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/4.5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85"
              alt="Sunlight filtering through a green forest"
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
              The tree initiative
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Small beginnings. A longer horizon.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#74756a]">
              Roots & Legacy has an annual ambition to plant at least
              500 native trees, with species and locations selected
              according to local conditions and practical suitability.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#74756a]">
              Planting is only one part of the process. Site selection,
              appropriate species, aftercare and survival checks are
              important to giving each tree a chance to establish.
            </p>

            <div className="mt-9 border-y border-[#deded4] py-7">
              <p className="font-serif text-6xl tracking-tight text-[#777c63] sm:text-7xl">
                500+
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#77786d]">
                Native trees · annual planting ambition
              </p>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#858579]">
              This figure represents an initiative target, not a verified
              count of trees already planted or surviving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#e9e9df] px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-300">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
              Our principles
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Stewardship, with intention.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#74756a] sm:text-base">
              Responsible environmental initiatives begin with realistic
              goals, appropriate choices and a willingness to keep caring
              after the initial effort.
            </p>
          </motion.div>

          <div className="mt-14 grid border-t border-[#c9cabe] sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="border-b border-[#c9cabe] py-8 sm:border-r sm:px-6 lg:border-b-0 lg:py-10 lg:first:pl-0"
              >
                <span className="text-xs tracking-[0.2em] text-[#858777]">
                  {principle.number}
                </span>
                <h3 className="mt-5 font-serif text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-4 pr-3 text-sm leading-7 text-[#74756a]">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy quote */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="font-serif text-7xl leading-none text-[#b5b8a6]">
            “
          </span>

          <blockquote className="-mt-2 font-serif text-3xl leading-[1.35] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            A meaningful legacy is not only what we build. It is what we{" "}
            <span className="italic text-[#777c63]">
              choose to nurture.
            </span>
          </blockquote>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#74756a] sm:text-base">
            We believe lasting progress is built through considered
            decisions, responsible action and a commitment that continues
            long after the first step.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#343a31] px-5 py-20 text-[#f7f5f0] sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4c7b5] sm:text-xs">
            Roots & Legacy
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Every lasting change begins somewhere.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
            Interested in learning more about our environmental
            initiative or discussing a property enquiry with IRIS Living
            Spaces? We welcome a conversation.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-[#f7f5f0] px-7 py-4 text-xs uppercase tracking-[0.15em] text-[#343a31] transition-colors hover:bg-[#dfe1d4]"
            >
              Get in touch
              <span className="ml-5" aria-hidden="true">
                ↗
              </span>
            </Link>

            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center border border-white/30 px-7 py-4 text-xs uppercase tracking-[0.15em] transition-colors hover:border-white hover:bg-white/5"
            >
              Discover IRIS
              <span className="ml-5" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
