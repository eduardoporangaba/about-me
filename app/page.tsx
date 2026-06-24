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
        <section className="-mt-20 overflow-hidden">
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
              className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_34%),linear-gradient(135deg,#0f0a1f_0%,#160b2d_48%,#09090f_100%)] px-6 py-8 text-left sm:px-10 md:px-14 md:py-12"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_28%,rgba(255,255,255,0.04)_100%)]" />
              <div className="relative z-10 grid h-full grid-cols-1 items-center gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.7fr)] xl:gap-10">
                <div className="flex min-w-0 flex-col gap-5 xl:gap-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-200/80">
                      Sobre mim
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-6 tracking-normal text-zinc-100 sm:text-base sm:leading-7 xl:mt-6 xl:text-lg xl:leading-8">
                      Olá! Sou Eduardo, um entusiasta de tecnologia trabalhando
                      como Assistente na área de desenvolvimento. Minha jornada
                      envolve projetos com JavaScript, TypeScript, React, HTML e
                      CSS, aplicados tanto em iniciativas pessoais quanto
                      profissionais, mesmo que não seja minha função principal.
                      Com experiência ainda em crescimento, aprendo algo novo
                      todos os dias e busco evoluir para me tornar um
                      desenvolvedor Full-Stack e, eventualmente, um Engenheiro
                      de Software.
                      <br />
                      <br />
                      Meu foco está em criar soluções limpas, eficientes e
                      user-friendly, sempre priorizando boas práticas e
                      inovação.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-purple-100/80 sm:text-sm">
                    <span className="rounded-full border border-purple-300/20 px-3 py-1.5 sm:px-4 sm:py-2">
                      JavaScript
                    </span>
                    <span className="rounded-full border border-purple-300/20 px-3 py-1.5 sm:px-4 sm:py-2">
                      TypeScript
                    </span>
                    <span className="rounded-full border border-purple-300/20 px-3 py-1.5 sm:px-4 sm:py-2">
                      React
                    </span>
                    <span className="rounded-full border border-purple-300/20 px-3 py-1.5 sm:px-4 sm:py-2">
                      Suporte T.I.
                    </span>
                  </div>
                </div>

                <div className="flex justify-center xl:justify-end">
                  <Image
                    src="/eu_2.png"
                    alt="Eduardo Porangaba"
                    width={500}
                    height={500}
                    sizes="(max-width: 1023px) 144px, 320px"
                    className="aspect-square w-full max-w-32 rounded-2xl border border-purple-200/15 object-cover shadow-[0_24px_55px_rgba(0,0,0,0.32)] sm:max-w-36 xl:max-w-xs"
                  />
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
        <section id="experiencia" className="py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Experiências:
          </h2>
          <ExperienceList />
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
