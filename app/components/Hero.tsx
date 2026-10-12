import Link from "next/link";
import { motion, type Variants } from "framer-motion";

function Hero({ stagger, reveal }: { stagger: Variants, reveal: Variants }) {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#474a40] text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/Images/hero-poster.png"
        className="absolute inset-0 h-full w-full object-cover"
      >

        <source src="/Images/Hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-[#171c17]/75 via-[#171c17]/40 to-[#171c17]/10" />
      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/10" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-32 sm:px-10 md:px-16 xl:px-24"
      >
        <motion.div variants={reveal}>
          <span className="text-[9px] tracking-[0.25em] text-white/85 sm:text-[14px]">
            REAL ESTATE · REIMAGINED
          </span>
        </motion.div>

        <motion.h1
          variants={reveal}
          className="mt-7 max-w-4xl font-serif text-6xl leading-[0.98] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[112px]"
        >
          Space for
          <br />
          <span className="italic text-[#e4dfd1]">what matters.</span>
        </motion.h1>

        <motion.p
          variants={reveal}
          className="mt-7 max-w-md text-xs leading-7 text-white/80 sm:text-sm sm:leading-8"
        >
          Considered property advisory for the life you envision
          and the opportunities you seek.
        </motion.p>

        <motion.div
          variants={reveal}
          className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5"
        >
          <Link
            href="/advisory"
            className="group inline-flex min-h-13 items-center gap-6 border border-[#f7f5f0] bg-[#f7f5f0] px-6 py-4 text-[14px] text-[#252923] transition-colors duration-300 hover:bg-transparent hover:text-white"
          >
            Discover our approach
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>

          <Link
            href="/global-markets"
            className="group inline-flex items-center gap-3 text-[14px] text-white"
          >
            Explore our markets
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-5 border-t border-white/30 pt-4 text-[7px] tracking-[0.13em] text-white/80 sm:left-10 sm:right-10 md:left-16 md:right-16 md:text-[9px] xl:left-24 xl:right-24">
        <span>RESIDENTIAL · COMMERCIAL · DEVELOPMENT</span>
        <a href="#introduction" className="shrink-0 hover:text-white">
          SCROLL TO EXPLORE ↓
        </a>
      </div>
    </section>
  )
}

export default Hero