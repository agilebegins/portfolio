import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Button({
  label,
  href,
}: {
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="bg-orange-500 text-white overflow-hidden group-hover:text-orange-500 rounded-full px-4 py-2.5 relative before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-0 group-hover:before:w-full before:transition-all z-10 border-2 border-orange-500">
        <span className="relative z-20">{label}</span>
      </span>
      <span className="size-10 bg-orange-500 text-white overflow-hidden flex items-center justify-center group-hover:text-orange-500 rounded-full relative before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-0 group-hover:before:w-full before:transition-all border-orange-500 border-2 group-hover:rotate-45 z-10">
        <span className="relative z-20">
          <ArrowUpRight />
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center group"
      >
        {content}
      </a>
    );
  }

  return <div className="inline-flex items-center group">{content}</div>;
}
