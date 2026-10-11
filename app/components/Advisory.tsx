import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "./Eyebrow";

const services = [
  {
    number: "01",
    title: "Residential Advisory",
    description:
      "Thoughtful guidance for finding homes aligned with your lifestyle, ambitions and long-term plans.",
    href: "/advisory#residential",
  },
  {
    number: "02",
    title: "Commercial Real Estate",
    description:
      "Explore commercial spaces, retail destinations, offices and strategic property opportunities.",
    href: "/advisory#commercial",
  },
  {
    number: "03",
    title: "Development Advisory",
    description:
      "Evaluate land, development potential, project positioning and investment opportunities.",
    href: "/advisory#developments",
  },
  {
    number: "04",
    title: "Investment Opportunities",
    description:
      "A considered approach to property selection, market context and investment objectives.",
    href: "/advisory#investment",
  },
  {
    number: "05",
    title: "International Property",
    description:
      "Explore selected international markets with a broader property perspective.",
    href: "/global-markets",
  },
  {
    number: "06",
    title: "Private Consultation",
    description:
      "A personal conversation to understand your requirements and identify the next step.",
    href: "/contact",
  },
];

function Advisory({reveal}: {reveal: Variants}) {
  return (
   <section className="px-6 py-20 sm:px-10 md:px-16 md:py-32 xl:px-24">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="self-start"
            >
              <Eyebrow>WHAT WE DO</Eyebrow>

              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                The right guidance.
                <span className="mt-2 block italic text-[#777c63]">
                  The right perspective.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-xs leading-7 text-[#77776e] sm:text-sm sm:leading-8">
                Every property decision starts with understanding
                what matters to you. Our advisory approach brings
                your requirements and available opportunities into focus.
              </p>

              <Link
                href="/advisory"
                className="group mt-7 inline-flex items-center gap-6 border border-[#252923] bg-[#252923] px-6 py-4 text-[14px] text-white transition-colors hover:bg-transparent hover:text-[#252923]"
              >
                Explore our advisory
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </motion.div>

            <div className="border-t border-[#252923]/15">
              {services.map((service) => (
                <Link
                  href={service.href}
                  key={service.number}
                  className="group grid grid-cols-[25px_1fr_20px] gap-4 border-b border-[#252923]/15 py-6 transition-colors hover:bg-[#eeebe3]/60 sm:grid-cols-[35px_1fr_25px] sm:gap-5 sm:py-7"
                >
                  <span className="pt-1 text-[9px] text-[#777c63]">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[14px] leading-6 text-[#77776e] sm:text-xs sm:leading-7">
                      {service.description}
                    </p>
                  </div>

                  <span className="justify-self-end text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

  )
}

export default Advisory