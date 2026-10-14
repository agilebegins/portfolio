"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Panel reveal effect
      gsap.fromTo(
        ".about-panel",
        {
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          y: 120,
        },
        {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-panel",
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // Content animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 75%",
        },
      });

      tl.from(".about-label", {
        y: 20,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          ".about-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        )
        .from(
          ".about-text",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".about-cta",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".about-stat",
          {
            y: 50,
            scale: 0.95,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.2"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-neutral-950 pt-20 overflow-hidden"
    >
      <div
        className="
          about-panel
          bg-[#f7f7f5]
          min-h-screen
          rounded-t-[100px]
          px-[5vw]
          py-28
        "
      >
        <div className="about-content max-w-5xl mx-auto text-center">
          {/* Label */}
          <p className="about-label text-orange-500 uppercase tracking-[0.3em] text-sm mb-5">
            About Agile Begins
          </p>

          {/* Heading */}
          <h2
            className="
              about-title
              font-bebasNeue
              text-6xl
              md:text-8xl
              uppercase
              leading-none
            "
          >
            Building Digital
            <br />
            Experiences
          </h2>

          {/* Description */}
          <p className="about-text mt-8 text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            Agile Begins is a web development agency focused on helping
            startups, businesses, and ambitious founders establish a
            strong online presence through carefully crafted websites
            and web applications that communicate clearly, build trust,
            and support long-term growth.
          </p>

          <p className="about-text mt-6 text-[#9F1239] leading-relaxed max-w-3xl mx-auto">
            We partner closely with our clients to understand their
            goals, challenges, and vision, transforming ideas into
            modern digital experiences that not only look great but
            also create meaningful connections with the people they
            want to reach.
          </p>

          {/* CTA */}
          <div className="about-cta flex justify-center mt-5">
            <div
              className="group flex items-center"
            >
              <Button label="view projects" />

              <div className="size-10 rounded-full bg-[#9F1239] text-white flex items-center justify-center ml-2 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="about-stat border border-neutral-200 p-8 rounded-xl bg-white">
              <h3 className="text-5xl font-bold text-orange-500">
                10+
              </h3>
              <p className="mt-3 uppercase text-sm text-neutral-700">
                Projects Delivered
              </p>
            </div>

            <div className="about-stat border border-neutral-200 p-8 rounded-xl bg-white">
              <h3 className="text-5xl font-bold text-orange-500">
                10+
              </h3>
              <p className="mt-3 uppercase text-sm text-neutral-700">
                Tools & Technologies
              </p>
            </div>

            <div className="about-stat border border-neutral-200 p-8 rounded-xl bg-white">
              <h3 className="text-5xl font-bold text-orange-500">
                Fast
              </h3>
              <p className="mt-3 uppercase text-sm text-neutral-700">
                Delivery Process
              </p>
            </div>

            <div className="about-stat border border-neutral-200 p-8 rounded-xl bg-white">
              <h3 className="text-5xl font-bold text-orange-500">
                Modern
              </h3>
              <p className="mt-3 uppercase text-sm text-neutral-700">
                Development Stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}