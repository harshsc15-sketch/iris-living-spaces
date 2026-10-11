import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
    reveal
}: {
  eyebrow: string;
  title: string;
  description: string;
  reveal: Variants;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-xs leading-7 text-[#77776e] sm:text-sm">
        {description}
      </p>
    </motion.div>
  );
}
