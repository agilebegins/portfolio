"use client";
import { gsap, useGSAP } from "@/lib/gsap-util";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/data";
import Button from "./Button";
import { useRef, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const MenuRef = useRef<HTMLUListElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!MenuRef.current) return;
    tlRef.current = gsap
      .timeline({ paused: true })
      .fromTo(
        MenuRef.current,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        },
      )
      .from(
        ".link",
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.2",
      );
  });

  const handleClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      if (MenuRef.current) MenuRef.current.classList.remove("pointer-events-none");
      tlRef.current?.restart();
      // ensure no lingering reverse callback
      tlRef.current?.eventCallback("onReverseComplete", null);
    } else {
      tlRef.current?.reverse();
      tlRef.current?.eventCallback("onReverseComplete", () => {
        if (MenuRef.current) MenuRef.current.classList.add("pointer-events-none");
        setIsMenuOpen(false);
        tlRef.current?.eventCallback("onReverseComplete", null);
      });
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-stone-100/20 backdrop-blur-sm z-50 ">
      <div className="container flex items-center justify-between py-4">
        {/* logo */}
        <Link href="/" className="logo font-bebasNeue text-[32px]">
          Agile Begins
        </Link>
        {/* mobile menu */}
        <nav className="lg:hidden">
          <button
            type="button"
            onClick={handleClick}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center rounded-xl bg-black text-white transition hover:bg-black/80"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul
            id="mobile-navigation"
            ref={MenuRef}
            className="fixed left-0 top-full flex h-62.5 w-full flex-col items-center justify-center bg-stone-900 text-stone-50 opacity-0 pointer-events-none"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="link font-bebasNeue text-4xl"
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop menu  */}
        <nav className="hidden lg:flex items-center gap-5">
          <ul className="flex items-center gap-11">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="uppercase font-semibold hover:text-black transi">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button label="Let's talk" />
        </nav>
      </div>
    </header>
  );
}
