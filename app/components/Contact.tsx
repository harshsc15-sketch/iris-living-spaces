import {motion,type Variants} from "framer-motion"
import { Eyebrow } from "./Eyebrow"
import Link from "next/link"

function Contact({reveal}: {reveal: Variants}) {
  return (
    <section className="px-6 py-24 text-center sm:px-10 md:px-16 md:py-32">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <Eyebrow>A CONVERSATION STARTS HERE</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-7xl">
              Every next chapter
              <span className="mt-2 block italic text-[#777c63]">
                begins with a conversation.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-xs leading-7 text-[#77776e] sm:text-sm sm:leading-8">
              Tell us what you are looking for. We will begin by
              understanding your requirements.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-6 border border-[#252923] bg-[#252923] px-6 py-4 text-[14px] text-white transition-colors hover:bg-transparent hover:text-[#252923]"
              >
                Arrange a consultation
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>

              <a
                href="tel:+91981013400"
                className="border-b border-[#777c63] pb-2 text-[14px]"
              >
                Call +91 98101 3400
              </a>
            </div>

            <a
              href="mailto:Info@irislivingspaces.in"
              className="mt-7 inline-block text-xs text-[#77776e] hover:text-[#252923]"
            >
              Info@irislivingspaces.in
            </a>
          </motion.div>
        </section>
  )
}

export default Contact