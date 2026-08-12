"use client";

import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "@remixicon/react";
import { Copy, Check, ArrowRight, Icon } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "portfolio@agilebegins.in";

  const socials = [
    {
      icon: RiLinkedinBoxFill,
      href: "https://linkedin.com/company/agilebegins",
      label: "LinkedIn",
    },
    {
      icon: RiWhatsappFill,
      href: "https://wa.me/917013218923",
      label: "WhatsApp",
    },
    {
      icon: RiInstagramFill,
      href: "https://instagram.com/agilebegins.in",
      label: "Instagram",
    },
  ];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="bg-black w-full pt-24 lg:pt-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading */}

          <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
            Contact
          </span>

          <h2 className="mt-6 text-5xl lg:text-7xl font-semibold text-white">
            Let&apos;s Build Something Great Together
          </h2>

          {/* Email Card */}

          <div className="mt-14  border border-zinc-800 bg-zinc-950 p-8 lg:p-10">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Email
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-3 break-all font-zendots text-xl md:text-2xl lg:text-2xl text-white"
            >
              {email}
            </a>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Email Button */}

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-medium text-black transition hover:scale-105"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </a>

              {/* Copy Button */}

              <button
                onClick={handleCopy}
                aria-label="Copy email address"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-white transition hover:border-orange-500 hover:text-orange-500"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}

                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

          {/* Social Links */}

          <div className="mt-10 flex items-center justify-center gap-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition hover:scale-110 hover:border-orange-500 hover:text-orange-500"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>

          {/* Bottom Text */}

          <p className="mt-8 text-sm text-zinc-500">
            Typically responds within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}