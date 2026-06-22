"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const socialLinks = [
  {
    href: "https://github.com/eduardoporangaba",
    iconSrc: "/gitHub.svg",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/edu.prl/",
    iconSrc: "/instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/eduardo-porangaba",
    iconSrc: "/linkedin.svg",
    label: "Linkedin",
  },
] as const;

type SocialLabel = (typeof socialLinks)[number]["label"];
type SocialLink = (typeof socialLinks)[number];

function AnimatedSocialLink({
  href,
  iconSrc,
  label,
  isActive,
  onActivate,
  reduceMotion,
}: SocialLink & {
  isActive: boolean;
  onActivate: (label: SocialLabel) => void;
  reduceMotion: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-active={isActive}
      onMouseEnter={() => onActivate(label)}
      onPointerEnter={() => onActivate(label)}
      onFocus={() => onActivate(label)}
      onKeyDown={() => onActivate(label)}
      className="group relative isolate flex h-11 items-center justify-center gap-3 rounded-full px-3 text-sm font-semibold tracking-normal text-zinc-300 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none sm:min-w-32 sm:px-5"
    >
      {isActive && (
        <motion.span
          layoutId="social-nav-active"
          aria-hidden="true"
          className="absolute inset-0 z-0 rounded-full border border-purple-300/25 bg-purple-400/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(124,58,237,0.18)]"
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 360, damping: 30 }
          }
        >
          <span className="absolute -top-2.5 left-1/2 h-1 w-7 -translate-x-1/2 rounded-full bg-purple-200 shadow-[0_0_8px_2px_rgba(196,181,253,0.9),0_0_20px_5px_rgba(139,92,246,0.42)] sm:w-10" />
        </motion.span>
      )}

      <Image
        src={iconSrc}
        alt=""
        width={24}
        height={24}
        className="relative z-10 invert opacity-90 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />

      <span
        aria-hidden="true"
        className="relative z-10 hidden h-5 overflow-hidden sm:block"
      >
        <span className="flex flex-col transition-transform duration-[400ms] ease-out group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2 motion-reduce:transform-none motion-reduce:transition-none">
          <span className="flex h-5 items-center">{label}</span>
          <span className="flex h-5 items-center text-white">{label}</span>
        </span>
      </span>
    </a>
  );
}

export function SocialGlassNavbar() {
  const [activeLabel, setActiveLabel] = useState<SocialLabel>("GitHub");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <nav
      aria-label="Links sociais"
      className="fixed inset-x-0 top-0 z-50 border-b border-purple-300/10 bg-[#231243]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-4">
        <div
          className="relative flex items-center rounded-full border border-purple-300/25 bg-[#160d2b]/75 p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_16px_42px_rgba(9,4,20,0.28),0_0_30px_rgba(124,58,237,0.1)] backdrop-blur-xl"
          onMouseLeave={() => setActiveLabel("GitHub")}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setActiveLabel("GitHub");
            }
          }}
        >
          {socialLinks.map((socialLink) => (
            <AnimatedSocialLink
              key={socialLink.href}
              {...socialLink}
              isActive={activeLabel === socialLink.label}
              onActivate={setActiveLabel}
              reduceMotion={reduceMotion}
            />
          ))}

          <span
            aria-hidden="true"
            className="mx-1 h-7 w-px bg-purple-100/15"
          />

          <div className="relative">
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="social-navigation-menu"
              onClick={() => setMenuOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setMenuOpen(false);
                }
              }}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-zinc-300 transition duration-200 hover:bg-white/8 hover:text-white focus-visible:bg-white/8 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200/70"
            >
              <span aria-hidden="true" className="-translate-y-0.5">
                ⋮
              </span>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  id="social-navigation-menu"
                  initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0 : 0.18 }}
                  className="absolute right-0 top-[calc(100%+0.75rem)] w-48 overflow-hidden rounded-2xl border border-purple-200/15 bg-[#160d2b]/95 p-1.5 text-sm text-zinc-200 shadow-[0_18px_44px_rgba(4,2,12,0.45)] backdrop-blur-xl"
                >
                  <Link
                    href="/dududu-edu"
                    className="block rounded-xl px-4 py-2.5 transition hover:bg-white/8 hover:text-white focus-visible:bg-white/8 focus-visible:text-white focus-visible:outline-none"
                  >
                    Saber mais
                  </Link>
                  <a
                    href="mailto:eduardoporangaba2@gmail.com"
                    className="block rounded-xl px-4 py-2.5 transition hover:bg-white/8 hover:text-white focus-visible:bg-white/8 focus-visible:text-white focus-visible:outline-none"
                  >
                    Contato
                  </a>
                  <Link
                    href="/dududu-edu"
                    className="block rounded-xl px-4 py-2.5 transition hover:bg-white/8 hover:text-white focus-visible:bg-white/8 focus-visible:text-white focus-visible:outline-none"
                  >
                    DuDudu&amp;Edu
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
