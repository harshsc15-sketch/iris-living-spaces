import Link from "next/link"
import Image from "next/image"
import  { motion,type Variants } from "framer-motion"
import { Eyebrow } from "./Eyebrow"

function Roots({reveal}: {reveal: Variants}) {
  return (
    <section className="relative flex min-h-130 items-center overflow-hidden bg-[#283329] text-white md:min-h-155">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85"
            alt="Sunlight passing through a mature forest"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#18221a]/65" />

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 mx-auto w-full max-w-375 px-6 py-24 sm:px-10 md:px-16 xl:px-24"
          >
            <Eyebrow>ROOTS & LEGACY</Eyebrow>
            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Building for today.
              <span className="mt-2 block italic text-[#ded8c7]">
                Thinking beyond tomorrow.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-xs leading-7 text-white/75 sm:text-sm sm:leading-8">
              A long-term perspective considers not only the spaces we create,
              but also the communities and environments around them.
            </p>
            <Link
              href="/roots-and-legacy"
              className="group mt-8 inline-flex items-center gap-6 border border-[#f7f5f0] bg-[#f7f5f0] px-6 py-4 text-[14px] text-[#252923] transition-colors hover:bg-transparent hover:text-white"
            >
              Explore our philosophy
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </motion.div>
        </section>
  )
}

export default Roots