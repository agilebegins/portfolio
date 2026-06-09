import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Button({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center group">
      <button className="bg-orange-500 text-white overflow-hidden group-hover:text-orange-500 rounded-full px-4 py-2 relative before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-0 group-hover:before:w-full before:transition-all z-10 border-2 border-orange-500">
        <span className="relative z-20">{label}</span>
      </button>
    </div>
  );
}
