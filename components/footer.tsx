'use client';

import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/sections/ContactSection";
import { RevealContent } from "@/components/ui/scroll-reveal";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer id="contact" className="relative w-full overflow-hidden scroll-mt-24 pt-16 pb-12">
      <div className="pointer-events-none absolute -bottom-20 left-0 -z-10 w-full min-h-96 opacity-40">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full object-cover"
          width={1260}
          height={863}
        />
      </div>

      <ContactSection />

      <RevealContent delay={0.2} className="relative z-10 mt-16 flex w-full flex-col items-center justify-between gap-6 border-t border-white/[0.1] pt-8 md:flex-row md:gap-4">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="font-sans text-sm font-semibold tracking-wide text-white">
            {links.ownerName}
          </p>
          <p className="font-mono text-xs text-neutral-400">
            BCA Student · BIT Mesra · Applied AI &amp; Data Science
          </p>
        </div>

        <p className="font-mono text-xs text-neutral-400 md:text-sm">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-white">{links.ownerName}</span> · All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target={profile.link.startsWith("mailto:") ? undefined : "_blank"}
              rel={profile.link.startsWith("mailto:") ? undefined : "noreferrer noopener"}
              className="flex size-10 items-center justify-center rounded-lg border border-white/[0.1] bg-black-200/80 backdrop-blur-md transition-all duration-200 hover:border-sky-500/50 hover:bg-black-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={profile.name}
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={profile.name}
                width={18}
                height={18}
                className="opacity-80 transition-opacity hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </RevealContent>
    </footer>
  );
};
