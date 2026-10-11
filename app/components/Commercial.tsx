import { SectionHeading } from './SectionHeading'
import { Eyebrow } from './Eyebrow'
import ImageCard from './ImageCard'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

const developments = [
  {
    category: "RETAIL & LEISURE",
    title: "Shopping Malls",
    description:
      "Retail destinations, shopping centres and commercial environments built around customer experience.",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "URBAN DEVELOPMENT",
    title: "Mixed-Use Destinations",
    description:
      "Integrated concepts combining residential, retail, hospitality and commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "LAND & OPPORTUNITY",
    title: "Land Development",
    description:
      "Explore land opportunities, site potential and early-stage development possibilities.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
  },
];


function Commercial({stagger, reveal}: {stagger: Variants, reveal: Variants}) {
  return (
     <section
          id="developments"
          className="bg-[#eeebe3] px-6 py-20 sm:px-10 md:px-16 md:py-28 xl:px-24"
        >
          <SectionHeading
            reveal={reveal}
            eyebrow="BEYOND RESIDENTIAL"
            title="Development with a wider vision."
            description="From retail destinations to larger development opportunities, explore commercial real estate through a broader lens."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {developments.map((item) => (
              <motion.article key={item.title} variants={reveal}>
                <Link href="/advisory#developments" className="group block">
                  <div className="relative">
                    <ImageCard
                      src={item.image}
                      alt={item.title}
                      className="aspect-[4/3.7]"
                    />

                    <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center bg-[#f7f5f0] text-[#252923] transition-colors group-hover:bg-[#777c63] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <div className="pt-6">
                    <Eyebrow>{item.category}</Eyebrow>
                    <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-7 text-[#77776e]">
                      {item.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-3 border-b border-[#777c63] pb-2 text-[14px]">
                      Explore opportunities
                      <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-[9px] leading-6 text-[#77776e]">
            Development opportunities are subject to availability, due
            diligence, applicable approvals and independent professional
            advice. These categories do not represent confirmed projects
            or guaranteed investment returns.
          </p>
        </section>
  )
}

export default Commercial