import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import Image from "next/image";

function Introduction({ reveal }: { reveal: Variants }) {
    return (
        <section
            id="introduction"
            className="grid gap-8 px-6 py-20 sm:px-10 md:grid-cols-[0.65fr_1.6fr] md:gap-12 md:px-16 md:py-32 xl:px-24"
        >
            <div className="flex items-center gap-4">
                <div className="relative h-50 w-50 md:h-60 md:w-60 lg:w-80 lg:h-80 shrink-0 overflow-hidden rounded-full">
                    <Image
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                        alt="Luxury architectural interior"
                        fill
                        sizes="1000px"
                        className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>

                <Eyebrow>THE IRIS PERSPECTIVE</Eyebrow>
            </div>

            <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                    Real estate is more than a transaction.
                    <span className="mt-2 block italic text-[#777c63]">
                        It is a decision about what comes next.
                    </span>
                </h2>

                <p className="mt-7 max-w-2xl text-xs leading-7 text-[#77776e] sm:text-sm sm:leading-8">
                    At IRIS Living Spaces, we approach property through
                    individual aspirations, practical considerations and
                    long-term possibilities. From private residences to
                    commercial developments, our focus is on helping
                    clients explore opportunities with clarity.
                </p>

                <Link
                    href="/about"
                    className="group mt-7 inline-flex items-center gap-4 border-b border-[#777c63] pb-2 text-[14px]"
                >
                    Get to know IRIS
                    <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                    </span>
                </Link>
            </motion.div>
        </section>
    )
}

export default Introduction;