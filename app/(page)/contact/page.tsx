
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const interests = [
  "Residential Property",
  "Property Investment",
  "Acquisition Advisory",
  "Property Portfolio Management",
  "NRI & Cross-Border Advisory",
  "Holiday Homes & Lifestyle Estates",
  "Land & Development",
  "Commercial Property",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((current) => ({ ...current, [field]: value }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      setStatus("success");
      setFeedback(
        "Thank you for contacting IRIS. Your enquiry has been received."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-3 w-full rounded-none border-0 border-b border-[#d8d8cc] bg-transparent px-0 py-3 text-sm text-[#343a31] outline-none transition-colors placeholder:text-[#a1a295] focus:border-[#777c63]";

  const labelClass =
    "text-[10px] uppercase tracking-[0.2em] text-[#777c63]";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-[#343a31]">

      {/* Intro */}
      <section className="px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-16 lg:pt-40">
        <div className="mx-auto max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#777c63]" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#777c63] sm:text-xs">
                Private consultation
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[88px]">
                Your next move
                <br />
                begins in{" "}
                <span className="italic text-[#777c63]">
                  confidence.
                </span>
              </h1>

              <p className="max-w-lg pb-2 text-base leading-8 text-[#74756a] sm:text-lg">
                Share what you are considering and how you would prefer
                to be contacted. Every enquiry is handled personally
                and discreetly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-16">
        <div className="mx-auto grid max-w-350 gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Left information panel */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <div className="border-t border-[#d8d8cc] pt-6">
              <p className={labelClass}>Markets</p>
              <p className="mt-4 max-w-sm font-serif text-2xl leading-relaxed sm:text-3xl">
                India
                <span className="mx-2 text-[#a8aa99]">·</span>
                Dubai
                <br />
                London
                <span className="mx-2 text-[#a8aa99]">·</span>
                Scotland
              </p>
            </div>

            <div className="mt-10 border-t border-[#d8d8cc] pt-6">
              <p className={labelClass}>Response</p>
              <p className="mt-3 font-serif text-xl sm:text-2xl">
                Personally reviewed
              </p>
              <p className="mt-2 max-w-sm text-sm leading-7 text-[#74756a]">
                An IRIS advisor will review your enquiry and follow up
                using your preferred contact details.
              </p>
            </div>

            <div className="mt-10 border-t border-[#d8d8cc] pt-6">
              <p className={labelClass}>Direct contact</p>

              <a
                href="mailto:Info@irislivingspaces.in"
                className="mt-4 block w-fit text-sm transition-colors hover:text-[#777c63]"
              >
                Info@irislivingspaces.in
              </a>

              <a
                href="tel:+91981013400"
                className="mt-3 block w-fit text-sm transition-colors hover:text-[#777c63]"
              >
                +91 98101 3400
              </a>

              <a
                href="https://wa.me/91981013400"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 border-b border-[#777c63] pb-2 text-[10px] uppercase tracking-[0.18em] hover:text-[#777c63]"
              >
                Contact on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-12 bg-[#ecebe3] p-6 sm:p-8">
              <p className="font-serif text-2xl">A considered conversation.</p>
              <p className="mt-3 text-sm leading-7 text-[#74756a]">
                Whether you are exploring a new acquisition, reviewing
                a portfolio or planning a future move, start by telling
                us what matters to you.
              </p>
              <Link
                href="/advisory"
                className="mt-5 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#777c63]"
              >
                Explore our advisory
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.aside>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-[#e0dfd5] bg-[#fbfaf7] p-6 sm:p-10 lg:p-12"
          >
            <div className="mb-9">
              <p className={labelClass}>Tell us about your plans</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Request a private consultation
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#74756a]">
                Fields marked with an asterisk are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot: keep hidden from real visitors */}
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(event) =>
                    updateField("website", event.target.value)
                  }
                />
              </div>

              <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={30}
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="+91 ..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="interest">
                    Area of interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={form.interest}
                    onChange={(event) =>
                      updateField("interest", event.target.value)
                    }
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  What are you considering? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Tell us a little about your property goals, preferred market or plans..."
                  className={`${inputClass} resize-y leading-7`}
                />
                <p className="mt-2 text-right text-xs text-[#999b8b]">
                  {form.message.length}/3000
                </p>
              </div>

              {feedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`border p-4 text-sm leading-6 ${
                    status === "success"
                      ? "border-[#c8d2be] bg-[#edf2e8] text-[#344b31]"
                      : "border-[#e2c6bd] bg-[#f8eeeb] text-[#8a4034]"
                  }`}
                >
                  {feedback}
                </div>
              )}

              <div className="border-t border-[#e0dfd5] pt-6">
                <p className="mb-5 text-xs leading-6 text-[#858579]">
                  By submitting this form, you agree that IRIS Living
                  Spaces may use your details to respond to your enquiry.
                  Please avoid including confidential financial or
                  identity information.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-h-14 w-full items-center justify-center bg-[#343a31] px-6 py-4 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#777c63] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-68"
                >
                  {loading ? "Submitting enquiry..." : "Request a private consultation"}
                  {!loading && (
                    <span className="ml-5" aria-hidden="true">↗</span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
