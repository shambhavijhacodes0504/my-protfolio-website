'use client';

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import {
  RevealHeading,
  RevealSubheading,
  StaggerContainer,
  StaggerItem,
} from "./ui/scroll-reveal";

export const RecentProjects = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 pt-16 pb-12">
      <div id="work" className="absolute -top-20" />
      
      {/* Eyebrow & Main Heading */}
      <RevealHeading>
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
            05 / FEATURED ENGINEERING &amp; PROJECTS
          </span>
          <span className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <h2 className="font-sans text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
          Selected implementations &amp; case studies.
        </h2>
      </RevealHeading>

      <RevealSubheading>
        <p className="mt-4 max-w-2xl text-base text-neutral-400 leading-relaxed sm:text-lg">
          Practical machine learning applications spanning real-time computer vision, cross-domain dense retrieval, explainable AI heuristics, and predictive business analytics.
        </p>
      </RevealSubheading>

      <StaggerContainer
        staggerChildren={0.12}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4"
      >
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }: any) => {
            const hasDestination = Boolean(link || sourceCode);
            return (
              <StaggerItem
                key={id}
                className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[38rem] sm:w-[570px] lg:min-h-[32.5rem]"
              >
                <PinContainer
                  title={hasDestination ? "Visit" : "In Development"}
                  href={hasDestination ? (link || sourceCode) : undefined}
                >
                  <div className="media-zoom-container relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                    <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                      <Image
                        height={330}
                        width={552}
                        src="/bg.png"
                        alt="bg-img"
                      />
                    </div>

                    <Image
                      height={300}
                      width={464}
                      src={img}
                      alt={title}
                      className="absolute bottom-0 z-10 transition-transform duration-500 ease-out group-hover/pin:scale-[1.04]"
                    />
                  </div>

                  <h3 className="line-clamp-1 text-base font-bold text-white md:text-xl lg:text-2xl transition-colors group-hover/pin:text-sky-300">
                    {title}
                  </h3>

                  <p className="line-clamp-2 text-sm font-light lg:text-base lg:font-normal text-[#c1c2d3] mt-2">
                    {des}
                  </p>

                  <div className="mb-3 mt-7 flex items-center justify-between">
                    <div className="flex items-center">
                      {iconLists?.map((icon: any, i: number) => (
                        <div
                          key={icon}
                          className="interactive-circle flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                          style={{
                            transform: `translateX(-${5 * i * 2}px)`,
                          }}
                        >
                          <Image
                            height={40}
                            width={40}
                            src={icon}
                            alt={icon}
                            className="p-2 invert"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center">
                      {hasDestination ? (
                        <Link
                          href={(sourceCode || link)!}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/link flex items-center text-sm font-semibold text-sky-400 transition-colors hover:text-white md:text-xs lg:text-base"
                        >
                          <span>View</span>
                          <FaLocationArrow className="ms-2 text-xs text-sky-400 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                      ) : (
                        <div className="flex items-center gap-1.5 rounded border border-white/[0.08] bg-black/40 px-2.5 py-1 font-mono text-xs text-neutral-400">
                          <span className="size-1.5 rounded-full bg-amber-400/80" />
                          <span>Private Repo</span>
                        </div>
                      )}
                    </div>
                  </div>
                </PinContainer>
              </StaggerItem>
            );
          }
        )}
      </StaggerContainer>
    </section>
  );
};
