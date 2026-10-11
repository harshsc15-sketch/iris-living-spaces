"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Advisory", href: "/advisory" },
  { label: "Global Markets", href: "/global-markets" },
  { label: "About", href: "/about" },
  { label: "Roots & Legacy", href: "/roots-and-legacy" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  const headerStyle = transparent
    ? "border-transparent bg-transparent text-white"
    : "border-[#252923]/10 bg-[#f7f5f0] text-[#252923] shadow-sm";

  const linkStyle = transparent
    ? "text-white/85 hover:text-white"
    : "text-[#55564f] hover:text-[#252923]";

  return (
    <header
      className={`z-50 border-b transition-[background-color,border-color,color,box-shadow] duration-300 ${
        isHome ? "fixed inset-x-0 top-0" : "relative"
      } ${headerStyle}`}
    >
      <div className="mx-auto flex min-h-20 max-w-[1600px] items-center justify-between gap-6 px-6 md:px-10 xl:px-20">
        <Link href="/" className="flex shrink-0 flex-col leading-none">
          <span className="font-serif text-3xl tracking-[0.12em]">
            IRIS
          </span>
          <span className="mt-2 text-[8px] tracking-[0.28em]">
            LIVING SPACES
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative py-2 text-[13px] transition-colors ${linkStyle}`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#a4a78b] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`hidden items-center gap-4 border px-4 py-3 text-[12px] transition-colors lg:flex ${
            transparent
              ? "border-white/70 hover:bg-white hover:text-[#252923]"
              : "border-[#252923] hover:bg-[#252923] hover:text-white"
          }`}
        >
          Private Consultation <span>↗</span>
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 border transition-colors lg:hidden ${
            transparent ? "border-white/50" : "border-[#252923]/20"
          }`}
        >
          <span
            className={`h-px w-5 ${
              transparent ? "bg-white" : "bg-[#252923]"
            }`}
          />
          <span
            className={`h-px w-5 ${
              transparent ? "bg-white" : "bg-[#252923]"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-[#252923]/10 bg-[#f7f5f0] px-6 text-[#252923] shadow-lg lg:hidden"
          >
            {links.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                className="border-b border-[#252923]/10"
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between font-serif text-xl"
                >
                  {item.label}
                  <span className="font-sans text-sm">↗</span>
                </Link>
              </motion.div>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block border-b border-[#252923]/10 py-5 text-xs"
            >
              Private Consultation ↗
            </Link>

            <a
              href="tel:+91981013400"
              className="block py-5 text-xs"
              onClick={() => setOpen(false)}
            >
              +91 98101 3400
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}