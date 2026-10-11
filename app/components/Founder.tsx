import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Eyebrow } from "./Eyebrow";

function Founder({reveal}: {reveal: Variants}) {
    return (
        <section
  id = "founder"
    className = "bg-[#f7f5f0] px-6 py-20 sm:px-10 md:px-16 md:py-28 xl:px-24"
        >
        <div className="mx-auto grid max-w-350 items-center gap-12 md:grid-cols-2 md:gap-20">
            <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative"
            >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e1d7]">
                    <Image
                        src="/sahil-verma-founder.png"
                        alt="Sahil Verma, Co-Founder of IRIS Living Spaces"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                </div>

                <div className="absolute -bottom-4 -right-3 bg-[#777c63] px-5 py-4 text-white sm:-right-5">
                    <p className="text-[9px] tracking-[0.2em]">EXPERIENCE</p>
                    <p className="mt-1 font-serif text-2xl">21+ Years</p>
                </div>
            </motion.div>

            {/* Founder Content */}
            <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="py-4 md:py-8"
            >
                <Eyebrow>FROM THE CO-FOUNDER&apos;S DESK</Eyebrow>

                <h2 className="mt-7 font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                    Property is personal.
                    <span className="mt-2 block italic text-[#777c63]">
                        Legacy, even more so.
                    </span>
                </h2>

                <div className="my-8 h-px w-16 bg-[#777c63]" />

                <p className="max-w-xl text-sm leading-8 text-[#686960]">
                    With more than 21 years of experience across real estate strategy,
                    APAC investments, mergers and acquisitions, and fundraising, Sahil
                    Verma brings an operator&apos;s perspective to every conversation.
                </p>

                <p className="mt-5 max-w-xl text-sm leading-8 text-[#686960]">
                    His work spans India, the UAE, and the United Kingdom, with a focus
                    on disciplined, cross-border advisory for HNIs and UHNIs. At IRIS,
                    that experience shapes a considered approach to property, wealth,
                    and legacy.
                </p>

                <div className="mt-10 border-t border-[#252923]/15 pt-6">
                    <h3 className="font-serif text-2xl tracking-tight">
                        Sahil Verma
                    </h3>
                    <p className="mt-2 text-[10px] tracking-[0.2em] text-[#777c63]">
                        CO-FOUNDER, IRIS LIVING SPACES
                    </p>
                </div>
            </motion.div>
        </div>
</section >
  )
}

export default Founder