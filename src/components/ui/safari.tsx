"use client";

import Image from "next/image";
import React from "react";
import { ShieldAlert, Lock } from "lucide-react";

interface SafariMockupProps {
  image: string;
  url: string;
  name: string;
  className?: string;
  aspectRatio?: string;
}

export function SafariMockup({
  image,
  url,
  name,
  className = "",
  aspectRatio = "aspect-[16/10]",
}: SafariMockupProps) {
  // Clean URL for display in the address bar (e.g. remove https:// and trailing slashes)
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      className={`group/safari relative w-full overflow-hidden rounded-xl border border-[#252525]/10 dark:border-white/10 bg-[#F5F3EF] dark:bg-[#1E1E1E] transition-all duration-300 ${aspectRatio} ${className}`}
    >
      {/* Browser window header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#EAE8E3]/80 dark:bg-[#151515]/90 border-b border-[#252525]/5 dark:border-white/5 select-none shrink-0 z-10 relative">
        {/* Left: Window Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] transition-opacity duration-200 group-hover/safari:opacity-100" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] transition-opacity duration-200 group-hover/safari:opacity-100" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] transition-opacity duration-200 group-hover/safari:opacity-100" />
        </div>

        {/* Center: Address Bar */}
        <div className="flex-1 mx-6 max-w-md bg-[#FCFBF9] dark:bg-[#2A2A2A] border border-[#252525]/5 dark:border-white/5 rounded-lg py-1 px-3 flex items-center justify-center gap-1.5 text-[10px] text-[#252525]/50 dark:text-[#FCFBF9]/50 font-mono tracking-tight shadow-inner select-all truncate">
          <Lock className="w-2.5 h-2.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* Right: Window Options (Placeholder for layout symmetry) */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#252525]/20 dark:bg-white/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#252525]/20 dark:bg-white/20" />
        </div>
      </div>

      {/* Browser Page viewport */}
      <div className="relative w-full h-full bg-[#FCFBF9] dark:bg-[#121212] overflow-hidden pt-[37px] -mt-[37px]">
        <Image
          src={image}
          alt={`Screenshot preview of ${name}`}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover/safari:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        
        {/* Subtle hover overlay to give a glassy surface feel */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#252525]/5 to-transparent pointer-events-none opacity-0 group-hover/safari:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
