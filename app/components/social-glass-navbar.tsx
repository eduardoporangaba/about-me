"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  {
    href: "/",
    iconSrc: null,
    label: "Home",
    external: false,
  },
  {
    href: "https://github.com/eduardoporangaba",
    iconSrc: "/gitHub.svg",
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.instagram.com/edu.prl/",
    iconSrc: "/instagram.svg",
    label: "Instagram",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/eduardo-porangaba",
    iconSrc: "/linkedin.svg",
    label: "Linkedin",
    external: true,
  },
] as const;

type NavigationLabel = (typeof navigationItems)[number]["label"];
type NavigationItem = (typeof navigationItems)[number];

function HomeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

function AnimatedNavigationItem({
  href,
  iconSrc,
  label,
  external,
  isActive,
  isCurrent,
  onActivate,
  reduceMotion,
}: NavigationItem & {
  isActive: boolean;
  isCurrent: boolean;
  onActivate: (label: NavigationLabel) => void;
  reduceMotion: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      aria-current={isCurrent ? "page" : undefined}
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

      <span className="relative z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt=""
            width={24}
            height={24}
            className="invert"
          />
        ) : (
          <HomeIcon />
        )}
      </span>

      <span
        aria-hidden="true"
        className="relative z-10 hidden h-5 overflow-hidden sm:block"
      >
        <span className="flex flex-col transition-transform duration-[400ms] ease-out group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2 motion-reduce:transform-none motion-reduce:transition-none">
          <span className="flex h-5 items-center">{label}</span>
          <span className="flex h-5 items-center text-white">{label}</span>
        </span>
      </span>
    </Link>
  );
}

export function SocialGlassNavbar() {
  const pathname = usePathname();
  const [hoveredLabel, setHoveredLabel] = useState<NavigationLabel | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const activeLabel = hoveredLabel ?? (pathname === "/" ? "Home" : null);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 10);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <nav
      aria-label="Navegação principal"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "border-b border-transparent bg-transparent pt-2"
          : "border-b border-purple-300/10 bg-[#231243]/80 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-center px-4 transition-all duration-300 ease-out ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <div
          className={`relative flex max-w-[calc(100vw-1.5rem)] items-center rounded-full border p-1.5 backdrop-blur-xl transition-all duration-300 ease-out ${
            isScrolled
              ? "border-purple-200/30 bg-[#160d2b]/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_18px_46px_rgba(7,2,18,0.46),0_0_34px_rgba(168,85,247,0.18)]"
              : "border-purple-300/25 bg-[#160d2b]/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_16px_42px_rgba(9,4,20,0.28),0_0_30px_rgba(124,58,237,0.1)]"
          }`}
          onMouseLeave={() => setHoveredLabel(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setHoveredLabel(null);
            }
          }}
        >
          {navigationItems.map((navigationItem) => (
            <AnimatedNavigationItem
              key={navigationItem.label}
              {...navigationItem}
              isActive={activeLabel === navigationItem.label}
              isCurrent={!navigationItem.external && navigationItem.href === pathname}
              onActivate={setHoveredLabel}
              reduceMotion={reduceMotion}
            />
          ))}

          <span
            aria-hidden="true"
            className="mx-1 h-7 w-px bg-purple-100/15"
          />

          <div ref={menuRef} className="relative">
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="social-navigation-menu"
              onClick={() => setMenuOpen((open) => !open)}
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
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-2.5 transition hover:bg-white/8 hover:text-white focus-visible:bg-white/8 focus-visible:text-white focus-visible:outline-none"
                  >
                    Saber mais
                  </Link>
                  <Link
                    href="/contato"
                    aria-current={pathname === "/contato" ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-2.5 transition hover:bg-white/8 hover:text-white focus-visible:bg-white/8 focus-visible:text-white focus-visible:outline-none ${
                      pathname === "/contato"
                        ? "bg-purple-400/15 text-white"
                        : ""
                    }`}
                  >
                    Contato
                  </Link>
                  <Link
                    href="/dududu-edu"
                    onClick={() => setMenuOpen(false)}
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
