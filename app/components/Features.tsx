import React from 'react'
import { Eyebrow } from './Eyebrow'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

function Features({reveal}: {reveal: Variants}) {
  return (
     <section className="grid lg:min-h-155 lg:grid-cols-2">
          <div className="group relative min-h-95 overflow-hidden bg-[#e5e1d8] sm:min-h-125">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90"
              alt="Contemporary residence with architectural details"
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
            className="flex flex-col items-start justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-16 xl:px-24"
          >
            <Eyebrow>A MORE PERSONAL APPROACH</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Property that
              <span className="block italic text-[#777c63]">
                fits your perspective.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-xs leading-7 text-[#77776e] sm:text-sm sm:leading-8">
              The right choice is not simply the most impressive property.
              It is the one that aligns with your priorities, intended use,
              financial considerations and vision for the future.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-6 border border-[#252923] bg-[#252923] px-6 py-4 text-[14px] text-white transition-colors hover:bg-transparent hover:text-[#252923]"
            >
              Discuss your requirements
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </motion.div>
        </section>
  )
}

export default Features