import React from "react";

export default function Button({
  label,
  href,
}: {
  label: string;
  href?: string;
}) {
  const className =
    "bg-orange-500 text-white overflow-hidden group-hover:text-orange-500 rounded-full px-8 py-4 relative before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-0 group-hover:before:w-full before:transition-all z-10 border-2 border-orange-500";

  if (href) {
    return (
      <div className="inline-flex items-center group">
        <a href={href} className={className}>
          <span className="relative z-20 uppercase font-spacegrotesk font-bold tracking-wide">
            {label}
          </span>
        </a>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center group">
      <button className={className}>
        <span className="relative z-20 uppercase font-spacegrotesk font-bold tracking-wide">
          {label}
        </span>
      </button>
    </div>
  );
}
