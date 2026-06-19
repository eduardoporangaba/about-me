"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const liquidGlassActionClass =
  "relative isolate flex min-h-14 w-full items-center justify-center rounded-full border border-black/50 bg-white/30 px-7 py-3 text-sm font-semibold tracking-normal text-zinc-900 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] backdrop-blur-sm transition-[transform,background-color,box-shadow] duration-300 hover:scale-[1.04] hover:bg-white/55 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-700 sm:w-auto";

export function NotFoundView() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-white px-4 py-10 font-mono text-zinc-950 sm:px-6 sm:py-14">
      <motion.section
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        aria-labelledby="not-found-title"
        className="flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative w-full max-w-2xl overflow-hidden bg-white"
        >
          <Image
            src="/404-lost.gif"
            alt="Ilustração animada de uma pessoa procurando o caminho"
            width={800}
            height={600}
            priority
            unoptimized
            className="block h-auto w-full"
          />

          <motion.p
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            }
            className="absolute inset-x-0 top-[7%] text-6xl font-black tracking-normal text-black sm:text-7xl md:text-8xl"
          >
            404
          </motion.p>
        </motion.div>

        <div className="mt-8 max-w-2xl sm:mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Erro 404
          </p>
          <h1
            id="not-found-title"
            className="mt-3 text-2xl font-bold tracking-normal text-zinc-950 sm:text-3xl"
          >
            Parece que você se perdeu.
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 tracking-normal text-zinc-600 sm:text-base">
            A página que você procura não existe, foi movida ou está
            temporariamente indisponível.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className={liquidGlassActionClass}>
              Voltar para a Home
            </Link>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className={liquidGlassActionClass}
            >
              Atualizar página
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
