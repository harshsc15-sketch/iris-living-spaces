
import type { ReactNode } from "react";


type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  eyebrow,
  title,
  introduction,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-[#343a31]">

      <section className="px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-40 lg:px-16">
        <div className="mx-auto max-w-300">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#777c63]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
              {eyebrow}
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#74756a] sm:text-lg">
            {introduction}
          </p>

          <p className="mt-6 text-xs tracking-wide text-[#858579]">
            Last updated: 11 October 2026
          </p>
        </div>
      </section>

      <section className="border-t border-[#e0dfd5] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <article className="legal-content mx-auto max-w-225">
          {children}
        </article>
      </section>

    </main>
  );
}
