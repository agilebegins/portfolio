"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { ArrowDown, Mouse } from "lucide-react";

import Button1 from "./Button1";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const scrollToProjects = () => {
    if (lenis) {
      lenis.scrollTo("#projects", { duration: 1.4 });
    } else {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero-line",
          {
            yPercent: 110,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.9,
          },
          "-=0.4"
        );

      gsap.utils.toArray<HTMLElement>(".hero-dot").forEach((dot, i) => {
        gsap.to(dot, {
          y: i % 2 === 0 ? -14 : 14,
          x: i % 3 === 0 ? 10 : 0,
          duration: 3.5 + i * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.to(".hero-scroll-icon", {
        y: 6,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen overflow-hidden bg-[#f7f7f5]"
    >
      {/* Decorative elements */}
      <div className="hero-dot absolute right-[8vw] top-[22%] size-2 rounded-full bg-orange-500 opacity-60" />
      <div className="hero-dot absolute left-[7vw] top-[38%] hidden size-1.5 rounded-full bg-black/20 sm:block" />
      <div className="hero-dot absolute bottom-[30%] right-[12vw] hidden size-1 rounded-full bg-black/20 sm:block" />
      <div className="hero-dot absolute bottom-[22%] left-[9vw] hidden size-1 rounded-full bg-orange-500/50 sm:block" />
      <div className="absolute left-[11vw] top-[16%] hidden size-12 rounded-full border border-black/10 lg:block" />
      <div className="absolute bottom-[26%] right-[7vw] hidden size-1.5 rotate-45 bg-black/20 lg:block" />

      {/* Main content */}
      <div className="relative z-10 container flex min-h-screen flex-col items-center justify-center text-center">
        {/* Label */}
        <span className="hero-eyebrow inline-flex items-center gap-2.5 rounded-full border border-black/10 px-4 py-2 font-spacegrotesk text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-neutral-700">
          <span className="size-1.5 rounded-full bg-orange-500" />
          Designing Digital Experiences
        </span>

        {/* Heading */}
        <h1 className="hero-title mt-8 font-sora font-medium leading-[1.05] tracking-[-0.02em] text-black text-[clamp(2.5rem,7.5vw,8.75rem)]">
          <span className="block overflow-hidden pb-1">
            <span className="hero-line block">We build digital</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-line block">
              experiences<span className="text-orange-500">.</span>
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="hero-desc mt-8 max-w-xl font-spacegrotesk text-base sm:text-lg leading-relaxed text-neutral-600">
          We design and build modern websites that help businesses look
          credible, stand out, and grow online.
        </p>

        {/* CTA */}
        <div className="hero-cta mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button1 label="Contact Us" href="mailto:portfolio@agilebegins.in" />

          <button
            type="button"
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-black px-8 py-4 font-spacegrotesk text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            See Projects
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 font-spacegrotesk text-[10px] uppercase tracking-[0.3em] text-neutral-500">
        <span className="hidden sm:inline">Scroll down</span>
        <span className="hidden h-px w-8 bg-black/15 sm:block" />
        <Mouse size={16} className="hero-scroll-icon text-orange-500" />
        <span className="hidden h-px w-8 bg-black/15 sm:block" />
        <span className="hidden sm:inline">to explore</span>
      </div>
    </section>
  );
}
