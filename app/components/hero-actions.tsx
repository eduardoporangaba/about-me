"use client";

import type { ReactNode } from "react";
import Image from "next/image";

const brandLogos = [
  NextLogo,
  AwsLogo,
  TailwindLogo,
  MotionLogo,
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
];

export function HeroActions() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center gap-8 px-2">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#experiencia"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 text-sm font-semibold tracking-normal text-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_16px_34px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
        >
          Ver experiências
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>

        <a
          href="https://github.com/eduardoporangaba"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative isolate inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/8 px-6 text-sm font-semibold tracking-normal text-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_16px_34px_rgba(0,0,0,0.2)] backdrop-blur transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-full before:bg-zinc-100 before:transition-transform before:duration-700 before:ease-out before:content-[''] hover:-translate-y-0.5 hover:border-white/20 hover:text-zinc-950 hover:before:translate-x-0 hover:before:translate-y-0 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 motion-reduce:transition-none motion-reduce:before:transition-none"
        >
          <Image
            src="/gitHub.svg"
            alt=""
            width={16}
            height={16}
            className="relative z-10 invert transition-[filter] duration-300 group-hover:invert-0 motion-reduce:transition-none"
          />
          <span className="relative z-10">GitHub</span>
        </a>
      </div>

      <div className="w-full max-w-3xl">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-100/45">
          Conhecimentos
        </p>
        <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,white_14%,white_86%,transparent)]">
          <div className="hero-tech-marquee flex w-max items-center gap-14 py-2">
            <TechTrack />
            <TechTrack ariaHidden />
          </div>
        </div>
      </div>
    </div>
  );
}

function TechTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10"
    >
      {brandLogos.map((Logo, index) => (
        <Logo key={index} />
      ))}
    </div>
  );
}

function LogoShell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <span
      aria-label={label}
      className="flex h-9 shrink-0 items-center justify-center text-zinc-300/65 opacity-80 transition duration-300 hover:text-zinc-100 hover:opacity-100"
    >
      {children}
    </span>
  );
}

function NextLogo() {
  return (
    <LogoShell label="Next.js">
      <Image
        src="/brand/nextjs-logo.svg"
        alt=""
        width={148}
        height={30}
        className="h-7 w-auto"
      />
    </LogoShell>
  );
}

function AwsLogo() {
  return (
    <LogoShell label="AWS">
      <Image
        src="/brand/aws-logo.svg"
        alt=""
        width={74}
        height={44}
        className="h-9 w-auto"
      />
    </LogoShell>
  );
}

function TailwindLogo() {
  return (
    <LogoShell label="Tailwind CSS">
      <svg
        viewBox="0 0 262 33"
        className="h-7 w-auto"
        aria-hidden="true"
      >
        <path
          className="fill-cyan-400"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
        />
        <text
          x="68"
          y="26"
          className="fill-current"
          fontFamily="Inter, Arial, Helvetica, sans-serif"
          fontSize="27"
          fontWeight="700"
          letterSpacing="-1.5"
        >
          tailwindcss
        </text>
      </svg>
    </LogoShell>
  );
}

function MotionLogo() {
  return (
    <LogoShell label="Framer Motion">
      <span className="flex items-center gap-2 text-base font-bold tracking-tight">
        <svg
          viewBox="0 0 14 21"
          className="h-6 w-4 fill-current"
          aria-hidden="true"
        >
          <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" />
        </svg>
        Motion
      </span>
    </LogoShell>
  );
}

function JavaScriptLogo() {
  return (
    <LogoShell label="JavaScript">
      <span className="flex items-center gap-2 text-base font-bold tracking-tight">
        <span className="flex h-7 w-7 items-end justify-end rounded-sm bg-[#f7df1e] px-1 pb-0.5 text-[15px] font-black leading-none text-black">
          JS
        </span>
        JavaScript
      </span>
    </LogoShell>
  );
}

function ReactLogo() {
  return (
    <LogoShell label="React">
      <span className="flex items-center gap-2 text-base font-bold tracking-tight">
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <circle cx="0" cy="0" r="2.05" className="fill-cyan-300" />
          <g className="stroke-cyan-300" fill="none" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        React
      </span>
    </LogoShell>
  );
}

function TypeScriptLogo() {
  return (
    <LogoShell label="TypeScript">
      <span className="flex items-center gap-2 text-base font-bold tracking-tight">
        <span className="flex h-7 w-7 items-end justify-center rounded-sm bg-[#3178c6] pb-0.5 text-[15px] font-black leading-none text-white">
          TS
        </span>
        TypeScript
      </span>
    </LogoShell>
  );
}
