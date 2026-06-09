"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button1 from "./Button1";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-trust",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );

      gsap.to(".hero-arrow", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: container }
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x =
        (e.clientX - window.innerWidth / 2) * 0.02;

      const y =
        (e.clientY - window.innerHeight / 2) * 0.02;

      gsap.to(".hero-arrow", {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section
      ref={container}
      className="relative min-h-screen overflow-hidden bg-[#f7f7f5]"
    >
      {/* Background Arrow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/RHGpn01.svg"
          alt=""
          width={800}
          height={800}
          priority
          className="hero-arrow opacity-[0.08]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="min-h-screen flex items-center">
          <div>
            {/* Eyebrow */}
            <span className="hero-eyebrow inline-block text-xs tracking-[0.35em] uppercase text-[#9F1239] mb-8">
              Design • Development • Growth
            </span>

            {/* Heading */}
            <h1
              className="
                hero-title
                text-6xl
                md:text-7xl
                lg:text-[7rem]
                text-black
                font-zendots
                uppercase
                leading-[0.95]
              "
            >
              design
              <br />
              develop
              <br />
              scale.
            </h1>

            {/* Description */}
            <p className="hero-desc mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-neutral-600">
              We design and build modern digital
              experiences that help startups and
              businesses earn trust, stand out,
              and grow online.
            </p>

            {/* CTA */}
            <div className="hero-cta flex flex-wrap gap-4 mt-12 uppercase">
              <Button1 label="Let's talk" />

              <Link
                href="/projects"
                className="
                  px-8 py-4
                  rounded-full
                  border border-orange-500
                  text-orange-500
                  font-bold
                  font-tasa
                  hover:bg-orange-500
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                View Work
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="hero-trust mt-20 border-t border-black/40 pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-2xl font-bold">
                    Modern
                  </p>
                  <p className="text-sm text-neutral-500">
                    Design Systems
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    Fast
                  </p>
                  <p className="text-sm text-neutral-500">
                    Performance
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    Custom
                  </p>
                  <p className="text-sm text-neutral-500">
                    Development
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    SEO
                  </p>
                  <p className="text-sm text-neutral-500">
                    Ready Websites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Brand Statement */}
        <div className="hidden lg:block absolute right-10 bottom-24 max-w-lg">
          <p className="text-sm uppercase tracking-widest font-frederick text-orange-400 mb-3">
            Agile Begins
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed">
            We believe every business has a unique story worth sharing, and our role is to help bring that story online through carefully crafted websites that reflect your vision, build credibility, and create meaningful connections with the people you want to reach.
          </p>
        </div>
      </div>
    </section>
  );
}