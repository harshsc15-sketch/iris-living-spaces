"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "@/app/components/Eyebrow";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const services = [
  {
    number: "01",
    title: "Property Portfolio Management",
    description:
      "A considered approach to overseeing residential and commercial property assets, from tenancy and maintenance coordination to ongoing portfolio reviews.",
    details: [
      "Property oversight and coordination",
      "Tenancy and maintenance support",
      "Portfolio reviews and reporting coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Acquisition & Investment Advisory",
    description:
      "Navigate property acquisitions with a clear understanding of the opportunity, relevant considerations and your longer-term objectives.",
    details: [
      "Property sourcing and shortlisting",
      "Due-diligence coordination",
      "Negotiation and transaction support",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "NRI & Cross-Border Advisory",
    description:
      "Guidance for non-resident Indians and internationally connected clients exploring property ownership and investment across markets.",
    details: [
      "Property opportunities in selected markets",
      "Coordination with relevant local professionals",
      "Ownership and transaction considerations",
    ],
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Holiday Homes & Lifestyle Estates",
    description:
      "Explore distinctive residences and lifestyle properties suited to personal retreats, family use and longer-term ownership goals.",
    details: [
      "Holiday homes and second residences",
      "Villas, farmhouses and distinctive estates",
      "Lifestyle-led property search",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Private & Off-Market Opportunities",
    description:
      "A discreet approach to exploring selected property opportunities, including assets that may not be widely promoted publicly.",
    details: [
      "Private property search",
      "Selected residential and commercial assets",
      "Opportunity screening and coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    title: "Land & Development Advisory",
    description:
      "Explore land and development opportunities with attention to location, potential use, feasibility and the requirements for informed decisions.",
    details: [
      "Land identification and opportunity review",
      "Development potential assessment coordination",
      "Connections with relevant technical professionals",
    ],
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85",
  },
];

const markets = [
  {
    name: "India",
    text: "Residential, commercial, land and lifestyle property opportunities.",
    image:
      "/Images/Property1.jpg",
  },
  {
    name: "Dubai",
    text: "International investment and contemporary lifestyle properties.",
    image:
      "/Images/Property2.jpg"
  },
  {
    name: "London",
    text: "Property opportunities in an established international market.",
    image:
      "/Images/Property3.jpg"
  },
  {
    name: "Scotland",
    text: "Distinctive homes, countryside retreats and lifestyle estates.",
    image:
      "/Images/Property4.jpeg"
  },
];


export default function AdvisoryPage() {
  return (
    <>
      <main className="overflow-hidden bg-[#f7f5f0] text-[#252923]">
        {/* Hero */}
        <section className="relative flex min-h-[72svh] items-center overflow-hidden bg-[#474a40] text-white md:min-h-[680px]">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
            alt="Contemporary luxury residence"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#171c17]/80 via-[#171c17]/50 to-[#171c17]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }}
            className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 pt-32 sm:px-10 md:px-16 md:pt-36 xl:px-24"
          >
            <motion.div variants={reveal}>
              <span className="text-[10px] tracking-[0.25em] text-white/80 sm:text-xs">
                PRIVATE REAL ESTATE ADVISORY
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-8xl lg:text-[104px]"
            >
              Property, considered.
              <span className="mt-2 block italic text-[#e4dfd1]">
                Possibilities, explored.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              Personalised guidance for property acquisition, portfolio
              management, international opportunities and development.
              Built around your objectives, not just the transaction.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-5 border border-[#f7f5f0] bg-[#f7f5f0] px-6 py-4 text-sm text-[#252923] transition-colors hover:bg-transparent hover:text-white"
              >
                Discuss Your Requirements
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center gap-3 text-sm text-white"
              >
                Explore our services <span>↓</span>
              </a>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-6 right-6 z-10 flex items-center justify-between gap-4 border-t border-white/30 py-5 text-[8px] tracking-[0.15em] text-white/75 sm:left-10 sm:right-10 md:left-16 md:right-16 md:text-[10px] xl:left-24 xl:right-24">
            <span>RESIDENTIAL · COMMERCIAL · DEVELOPMENT</span>
            <span>PERSONAL. CONSIDERED. CONNECTED.</span>
          </div>
        </section>

        {/* Introduction */}
        <section className="grid gap-8 px-6 py-20 sm:px-10 md:grid-cols-[0.65fr_1.6fr] md:gap-12 md:px-16 md:py-28 xl:px-24">
          <div>
            <Eyebrow>THE IRIS APPROACH</Eyebrow>
          </div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Every property decision is different.
              <span className="mt-2 block italic text-[#777c63]">
                Your advice should be, too.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#686960]">
              Whether you are acquiring a home, reviewing an existing
              portfolio, exploring international property or considering
              a development opportunity, we begin by understanding what
              you want to achieve.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#686960]">
              IRIS brings a personal perspective to property decisions,
              helping clients navigate options, coordinate relevant
              expertise and approach each next step with greater clarity.
            </p>
          </motion.div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="bg-[#eae8df] px-6 py-20 sm:px-10 md:px-16 md:py-28 xl:px-24"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <Eyebrow>OUR ADVISORY SERVICES</Eyebrow>

              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                A considered approach to every asset.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#686960]">
                From individual residences to larger investment and
                development considerations, our advisory is shaped around
                your brief and the nature of the opportunity.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.article
                  key={service.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ delay: (index % 2) * 0.08 }}
                  className="group grid overflow-hidden border border-[#252923]/10 bg-[#f7f5f0] sm:grid-cols-[0.85fr_1.15fr]"
                >
                  <div className="relative min-h-64 overflow-hidden sm:min-h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 42vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    <span className="absolute left-5 top-5 text-xs tracking-[0.18em] text-white">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-col p-6 sm:p-7 lg:p-8">
                    <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#686960]">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3 border-t border-[#252923]/10 pt-5">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-xs leading-5 text-[#55564f]"
                        >
                          <span className="text-[#777c63]">↗</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="group/link mt-7 inline-flex items-center gap-3 border-b border-[#777c63]/60 pb-2 text-xs"
                    >
                      Discuss this service
                      <span className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                        ↗
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial development */}
        <section className="px-6 py-20 sm:px-10 md:px-16 md:py-28 xl:px-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-2 md:gap-16">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden bg-[#e5e1d7]"
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
                alt="Contemporary commercial architecture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Eyebrow>BEYOND RESIDENTIAL</Eyebrow>

              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Development opportunities.
                <span className="mt-2 block italic text-[#777c63]">
                  A broader perspective.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#686960]">
                IRIS also explores commercial real estate and development-led
                opportunities, where land, location, intended use and
                feasibility all play a role in the decision.
              </p>

              <p className="mt-4 text-sm leading-8 text-[#686960]">
                Depending on the brief, this may include shopping malls,
                mixed-use destinations, commercial assets and land with
                development potential. Each opportunity requires its own
                assessment and appropriate professional input.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-4 border-b border-[#777c63] pb-2 text-sm"
              >
                Discuss a development opportunity
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Markets */}
        <section className="bg-[#343a31] px-6 py-20 text-white sm:px-10 md:px-16 md:py-28 xl:px-24">
          <div className="mx-auto max-w-[1400px]">
            <Eyebrow>OUR INTERNATIONAL PERSPECTIVE</Eyebrow>

            <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-end">
              <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Connected across markets.
                <span className="mt-2 block italic text-[#c5c7b3]">
                  Focused on your objectives.
                </span>
              </h2>

              <p className="max-w-lg text-sm leading-8 text-white/70 md:justify-self-end">
                Our international perspective spans India, the UAE and
                the United Kingdom, with opportunities considered in
                their local context and against your individual brief.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {markets.map((market, index) => (
                <motion.article
                  key={market.name}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/10">
                    <Image
                      src={market.image}
                      alt={`Property opportunities in ${market.name}`}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="text-[9px] tracking-[0.2em] text-white/70">
                        MARKET 0{index + 1}
                      </span>
                      <h3 className="mt-2 font-serif text-3xl">
                        {market.name}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-white/80">
                        {market.text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-20 sm:px-10 md:px-16 md:py-28 xl:px-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <Eyebrow>THE NEXT STEP</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Your priorities lead the conversation.
              </h2>
              <p className="mt-6 text-sm leading-8 text-[#686960]">
                We start with your requirements, identify the relevant
                considerations and discuss a practical way forward.
                The objective is to make a complex property decision
                easier to navigate.
              </p>
            </div>

            <div className="border-t border-[#252923]/15">
              {[
                {
                  n: "01",
                  title: "Understand your brief",
                  text: "Discuss your objectives, preferred markets, budget parameters and time horizon.",
                },
                {
                  n: "02",
                  title: "Explore relevant opportunities",
                  text: "Identify suitable options and review the considerations that matter to your decision.",
                },
                {
                  n: "03",
                  title: "Coordinate the next steps",
                  text: "Where appropriate, coordinate with relevant legal, financial, technical and local professionals.",
                },
              ].map((step) => (
                <motion.div
                  key={step.n}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-4 border-b border-[#252923]/15 py-7 sm:grid-cols-[60px_1fr] sm:gap-7"
                >
                  <span className="text-xs tracking-[0.15em] text-[#777c63]">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl">{step.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#686960]">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#eae8df] px-6 py-20 sm:px-10 md:px-16 md:py-28 xl:px-24">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <Eyebrow>PRIVATE CONSULTATION</Eyebrow>

            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
              The right property conversation starts here.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#686960]">
              Share what you are looking for, whether it is a home,
              an investment, a property portfolio or a development
              opportunity. Let us begin with your objectives.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-5 bg-[#343a31] px-6 py-4 text-sm text-white transition-colors hover:bg-[#777c63]"
              >
                Arrange a Consultation
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>

              <a
                href="tel:+91981013400"
                className="inline-flex min-h-12 items-center border border-[#252923]/30 px-6 py-4 text-sm transition-colors hover:bg-[#252923] hover:text-white"
              >
                +91 98101 3400
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}