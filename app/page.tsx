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
            <div className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_34%),linear-gradient(135deg,#0f0a1f_0%,#160b2d_48%,#09090f_100%)] px-6 py-8 text-left sm:px-10 md:px-14 md:py-12">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_28%,rgba(255,255,255,0.04)_100%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-200/80">
                    Sobre mim
                  </p>
                  <p className="mt-6 max-w-3xl text-sm leading-6 tracking-normal text-zinc-100 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                    Olá! Sou Eduardo, um entusiasta de tecnologia trabalhando
                    como Assistente na área de desenvolvimento. Minha jornada
                    envolve projetos com JavaScript, TypeScript, React, HTML e
                    CSS, aplicados tanto em iniciativas pessoais quanto
                    profissionais, mesmo que não seja minha função principal.
                    Com experiência ainda em crescimento, aprendo algo novo
                    todos os dias e busco evoluir para me tornar um
                    desenvolvedor Full-Stack e, eventualmente, um Engenheiro de
                    Software.
                    <br />
                    <br />
                    Meu foco está em criar soluções limpas, eficientes e
                    user-friendly, sempre priorizando boas práticas e inovação.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-purple-100/80">
                  <span className="rounded-full border border-purple-300/20 px-4 py-2">
                    JavaScript
                  </span>
                  <span className="rounded-full border border-purple-300/20 px-4 py-2">
                    TypeScript
                  </span>
                  <span className="rounded-full border border-purple-300/20 px-4 py-2">
                    React
                  </span>
                  <span className="rounded-full border border-purple-300/20 px-4 py-2">
                    Suporte T.I.
                  </span>
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

        {/* Sobre */}
        <section id="sobre" className="py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Brevemente:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <p className="text-base sm:text-lg leading-6 text-left">
              Meu nome é{" "}
              <span className="text-purple-200">
                Eduardo Porangaba Leite Ribeiro da Silva
              </span>
              , atualmente tenho 18 anos e trabalho como{" "}
              <span className="text-purple-200">Assistente de T.I. Júnior</span>{" "}
              na minha primeira empresa, e sinceramente?{" "}
              <span className="text-purple-200">AMO</span> o que faço!
              <br />
              <br />
              Sou fascinado por{" "}
              <span className="text-purple-200">tecnologia</span> desde pequeno,
              um pouco nerd, mas <span className="text-purple-200">sempre</span>{" "}
              com vontade de mexer com as máquinas.
              <br />
              <br />
              Nascido e crescido em{" "}
              <span className="text-purple-200">São Paulo</span>, atualmente
              moro em <span className="text-purple-200">Garuva SC</span>.
            </p>
            <div className="flex justify-center md:justify-end mt-4 md:mt-0">
              <Image
                src="/eu_2.png"
                alt="Eduardo Porangaba"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full max-w-md shadow-xl"
              />
            </div>
          </div>
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
