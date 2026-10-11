import Link from 'next/link'
import Image from 'next/image'
import { Eyebrow } from './Eyebrow'
import { motion, type Variants } from 'framer-motion'

function About({reveal}: {reveal: Variants}) {
  return (
     <section className="grid gap-10 bg-[#eeebe3] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20 xl:px-24">
          <div className="group relative aspect-[4/3.7] overflow-hidden bg-[#ddd8cc]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
              alt="Refined contemporary living interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <Eyebrow>ABOUT IRIS</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              A thoughtful approach to
              <span className="block italic text-[#777c63]">
                living and investing.
              </span>
            </h2>
            <p className="mt-6 text-xs leading-7 text-[#77776e] sm:text-sm sm:leading-8">
              We believe property decisions deserve time, perspective and
              careful consideration. IRIS Living Spaces brings a personal
              approach to navigating residential, commercial and development
              possibilities.
            </p>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-4 border-b border-[#777c63] pb-2 text-[14px]"
            >
              Discover our story
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </motion.div>
        </section>
  )
}

export default About