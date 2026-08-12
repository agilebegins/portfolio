"use client";

import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap-util";
import { projectItems } from "@/data/data";
import Button2 from "./Button2";
import Image from "next/image";
import { useRef } from "react";


export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLDivElement>(".project-panel");
    panels.forEach((panel, i) =>{
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      })
    })
  }, {scope: containerRef});
  return (
    <section ref={containerRef} id="projects" className="mb-[100vh]">
      {/* title */}
      <div className="project-panel min-h-svh flex flex-col items-center justify-center space-y-1 container">
        <h2 className="text-5xl md:text-7xl">our recent projects</h2>
        <p className="">scroll to explore</p>
      </div>

      {/* wrapper */}
      <div className="">
        {projectItems.map((item, index) => (
          <div key={item.id} className={`project-panel h-screen w-full text-white p-10 sm:px-10 lg:px-24 grid gap-9 lg:grid-cols-2 lg:items-center mx-auto`}
            style={{
              background:item.backgroundClr
            }}
          >
            {/* content */}
            <div className="space-y-4">
              <span className="size-10 border rounded-full inline-flex items-center justify-center text-lg">{item.id}</span>
              <p>{item.text}</p>
              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-zendots">{item.title}</h3>
              <Button2 label="live demo" href={item.link} />
            </div>

            {/* image */}
            <div className="flex items-center justify-center mx-auto">
              <Image src={item.img} alt={item.title} width={500} height={300} className="w-full h-full object-cover "/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
