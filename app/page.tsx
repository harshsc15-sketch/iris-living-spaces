"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Hero from "./components/Hero";
import { Eyebrow } from "./components/Eyebrow";
import Introduction from "./components/Interoduction";
import GlobalMarket from "./components/GlobalMarket";
import Commercial from "./components/Commercial";
import Advisory from "./components/Advisory";
import Features from "./components/Features";
import About from "./components/About";
import Roots from "./components/Roots";
import Contact from "./components/Contact";
import Founder from "./components/Founder";

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};





export default function HomePage() {
  return (
    <>

      <main className="overflow-hidden bg-[#f7f5f0] text-[#252923]">

        <Hero stagger={stagger} reveal={reveal} />

        {/* INTRODUCTION */}
        <Introduction reveal={reveal} />

        {/* GLOBAL MARKETS */}
        <GlobalMarket stagger={stagger} reveal={reveal} />

        {/* ADVISORY */}
        <Advisory reveal={reveal} />
        
        {/* COMMERCIAL DEVELOPMENTS */}
         <Commercial stagger={stagger} reveal={reveal} />     

        {/* FEATURED RESIDENTIAL */}
       <Features reveal={reveal} />

        {/* ABOUT IRIS */}
       <About reveal={reveal} />

        {/* ROOTS & LEGACY */}
        <Roots reveal={reveal} />

        {/* {Founder} */}
        <Founder reveal={reveal} />

        {/* CONTACT CTA */}
        <Contact reveal={reveal} />
      </main>

    </>
  );
}