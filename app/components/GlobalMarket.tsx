import Link from "next/link"
import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import ImageCard from "./ImageCard";

const markets = [
  {
    name: "India",
    description: "Established neighbourhoods. Emerging destinations.",
    image:
      "/Images/Property1.jpg",
  },
  {
    name: "Dubai",
    description: "Global investment. Contemporary living.",
    image:
      "/Images/Property2.jpg"
  },
  {
    name: "London",
    description: "Timeless architecture. International perspective.",
    image:
      "/Images/Property3.jpg",
  },
  {
    name: "Scotland",
    description: "Distinctive estates. A sense of place.",
    image:
      "/Images/property4.jpeg",
  },
];


function GlobalMarket({stagger, reveal}: {stagger: Variants, reveal: Variants}) {
  return (
   <section className="bg-[#eeebe3] px-6 py-20 sm:px-10 md:px-16 md:py-28 xl:px-24">
          <SectionHeading
            reveal={reveal}
            eyebrow="A WORLD OF POSSIBILITY"
            title="Perspective without borders."
            description="Explore distinctive property markets, each with its own character, opportunities and considerations."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4"
          >
            {markets.map((market, index) => (
              <motion.article key={market.name} variants={reveal}>
                <Link href="/global-markets" className="group block">
                  <ImageCard
                    src={market.image}
                    alt={`${market.name} property market`}
                    className="aspect-[4/4.6]"
                  />

                  <div className="relative pt-5">
                    <span className="text-[8px] tracking-[0.16em] text-[#77776e]">
                      0{index + 1} / GLOBAL MARKET
                    </span>

                    <span className="absolute right-1 top-7 text-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>

                    <h3 className="mt-2 font-serif text-3xl">{market.name}</h3>
                    <p className="mt-2 max-w-60 text-[14px] leading-6 text-[#77776e]">
                      {market.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              href="/global-markets"
              className="group inline-flex items-center gap-4 border-b border-[#777c63] pb-2 text-[14px]"
            >
              Explore all markets
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </div>
        </section>
  )
}

export default GlobalMarket