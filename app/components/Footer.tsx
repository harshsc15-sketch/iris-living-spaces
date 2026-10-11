import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Advisory", href: "/advisory" },
  { label: "Global Markets", href: "/global-markets" },
  { label: "About IRIS", href: "/about" },
  { label: "Roots & Legacy", href: "/roots-and-legacy" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#252923] px-6 pt-16 text-[#f4f1e8] md:px-10 md:pt-20 xl:px-20">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div>
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="font-serif text-4xl tracking-[0.12em]">IRIS</span>
            <span className="mt-2 text-[8px] tracking-[0.28em]">
              LIVING SPACES
            </span>
          </Link>

          <p className="mt-7 max-w-[260px] text-xs leading-7 text-white/60">
            A considered approach to real estate, investment, and the spaces
            that shape our lives.
          </p>

          <a
            href="mailto:Info@irislivingspaces.in"
            className="mt-5 block break-words text-xs text-white/80 hover:text-white"
          >
            Info@irislivingspaces.in
          </a>

          <a
            href="tel:+91981013400"
            className="mt-3 block text-xs text-white/80 hover:text-white"
          >
            +91 98101 3400
          </a>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="mb-3 font-serif text-2xl">Explore</h3>
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="mb-3 font-serif text-2xl">Our Approach</h3>
          <Link href="/advisory#residential" className="text-xs text-white/60 hover:text-white">
            Residential Advisory
          </Link>
          <Link href="/advisory#commercial" className="text-xs text-white/60 hover:text-white">
            Commercial Real Estate
          </Link>
          <Link href="/advisory#developments" className="text-xs text-white/60 hover:text-white">
            Development Advisory
          </Link>
          <Link href="/global-markets" className="text-xs text-white/60 hover:text-white">
            International Markets
          </Link>
        </div>

        <div>
          <span className="text-[9px] tracking-[0.2em] text-[#c9cbb7]">
            YOUR NEXT CHAPTER
          </span>
          <h3 className="mt-4 max-w-62 font-serif text-3xl leading-tight">
            Let&apos;s find the right space.
          </h3>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-4 border-b border-[#c9cbb7]/60 pb-2 text-xs"
          >
            Begin a conversation
            <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 border-t border-white/15 py-6 text-[14px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 IRIS Living Spaces.</span>

        <div className="flex flex-wrap gap-5">
          <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
        </div>

        <span>Designed with intention.</span>
      </div>
    </footer>
  );
}