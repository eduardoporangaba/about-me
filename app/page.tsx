"use client";
import Image from "next/image";
import ExperienceList from "./experiences";
import TypeAnimation from "./nameAnimation";
import { ContainerScroll } from "./components/container-scroll";
import { HeroActions } from "./components/hero-actions";
import { SocialGlassNavbar } from "./components/social-glass-navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-mono tracking-wide">
      <SocialGlassNavbar />

      {/* Espaço para compensar navbar fixa */}
      <div className="pt-20" />

      {/* Conteúdo principal - resto igual */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <section className="overflow-visible pt-4 sm:pt-6">
          <ContainerScroll
            titleComponent={
              <div className="space-y-4">
                <p className="text-base font-medium tracking-normal text-purple-100/80 sm:text-lg">
                  Opa! me chamo
                </p>
                <TypeAnimation />
                <HeroActions />
              </div>
            }
          >
            <div
              id="sobre"
              className="about-card-scrollbar relative h-full scroll-mt-28 overflow-x-hidden overflow-y-auto bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_34%),linear-gradient(135deg,#0f0a1f_0%,#160b2d_48%,#09090f_100%)] px-5 py-6 text-left [scrollbar-color:rgba(196,181,253,0.68)_rgba(255,255,255,0.06)] [scrollbar-width:thin] sm:scroll-mt-32 sm:px-8 sm:py-8 md:px-12 md:py-10 xl:px-14 xl:py-12"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_28%,rgba(255,255,255,0.04)_100%)]" />
              <div className="relative z-10 flex min-h-full flex-col justify-start gap-5">
                <div className="flex min-w-0 flex-col gap-4 xl:gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-200/80 sm:text-sm sm:tracking-[0.22em]">
                      Sobre mim
                    </p>
                    <p className="mt-3 max-w-3xl text-[13px] leading-6 tracking-normal text-zinc-100 sm:text-sm sm:leading-6 md:text-base md:leading-7 xl:mt-5 xl:text-base xl:leading-7">
                      Olá! Sou Eduardo, um entusiasta de tecnologia trabalhando
                      como Assistente na área de desenvolvimento. Minha jornada
                      envolve projetos com JavaScript, TypeScript, React, HTML e
                      CSS, aplicados tanto em iniciativas pessoais quanto
                      profissionais, mesmo que eu sou gay não seja minha função principal.
                      Com experiência ainda em crescimento, aprendo algo novo
                      todos os dias e busco evoluir para me tornar um
                      desenvolvedor Full-Stack e, eventualmente, um Engenheiro
                      de Software.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[11px] text-purple-100/80 sm:text-xs md:text-sm">
                    <span className="rounded-full border border-purple-300/20 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                      JavaScript
                    </span>
                    <span className="rounded-full border border-purple-300/20 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                      TypeScript
                    </span>
                    <span className="rounded-full border border-purple-300/20 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                      React
                    </span>
                    <span className="rounded-full border border-purple-300/20 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                      Suporte T.I.
                    </span>
                  </div>
                </div>

              </div>

              {/* Camada futura para a assinatura animada por cima do texto. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-8 right-8 z-20 h-24 w-64"
              />
            </div>
          </ContainerScroll>
        </section>

        {/* Experiências */}
        <section
          id="experiencia"
          className="mt-16 scroll-mt-28 py-10 sm:mt-12 sm:scroll-mt-32 sm:py-12 md:mt-0"
        >
          <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
            Experiências:
          </h2>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,440px)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(380px,480px)]">
            <div className="order-2 min-w-0 lg:order-1">
              <ExperienceList />
            </div>

            <aside
              aria-label="Foto de Eduardo Porangaba"
              className="order-1 mx-auto w-full max-w-md lg:sticky lg:top-28 lg:order-2 lg:mx-0 lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-purple-200/15 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_34%),linear-gradient(135deg,#0f0a1f_0%,#160b2d_48%,#09090f_100%)] p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_24px_60px_rgba(7,2,18,0.28)]">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_28%,rgba(255,255,255,0.04)_100%)]" />
                <div className="relative z-10 overflow-hidden rounded-2xl border border-purple-200/15 bg-[#0f0a1f]/70 p-2">
                  <Image
                    src="/eu_2.png"
                    alt="Eduardo Porangaba"
                    width={1179}
                    height={851}
                    unoptimized
                    sizes="(max-width: 767px) 92vw, (max-width: 1279px) 420px, 480px"
                    className="h-auto w-full rounded-xl object-contain"
                  />
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-6 mt-10 border-t border-neutral-200 dark:border-neutral-800">
          Projeto adaptado por Eduardo Porangaba usando Next.js, TypeScript e
          TailwindCSS.
          <br />© 2025, Portfólio de Apresentação Pessoal.
        </footer>
      </main>
    </div>
  );
}
