"use client";
import Image from "next/image";
import ExperienceList from "./experiences";
import TypeAnimation from "./nameAnimation";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans tracking-wide">
      {/* Navbar fixa, full-width, responsiva */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 py-4 sm:gap-12">
            {/* Links sociais - visíveis em sm+ ou sempre ícones */}
            <a
              href="https://github.com/eduardoporangaba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline hover:underline-offset-4"
            >
              <Image
                src="/gitHub.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="dark:invert"
              />
              <span className="hidden sm:block">GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/edu.prl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline hover:underline-offset-4"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="dark:invert"
              />
              <span className="hidden sm:block">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/eduardo-porangaba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline hover:underline-offset-4"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={24}
                height={24}
                className="dark:invert"
              />
              <span className="hidden sm:block">Linkedin</span>
            </a>

            {/* Botão extra */}
            <button //botão responsável por redirecionar para outro site | onClick={() => window.open("https://youtu.be/ko70cExuzZM?si=OSh52P8D2FpXYGRu""_blank")}
              className="hidden sm:block px-4 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              DuDudu&Edu
            </button>

            {/* Menu hamburger - só aparece em mobile */}
            <div className="sm:hidden relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-3xl p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
              >
                ⋮
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-900 shadow-lg rounded-lg py-2">
                  <a
                    href="mailto:eduardoporangaba1@gmail.com"
                    className="block w-full text-left px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    Contato
                  </a>
                  <button // botão responsável por redirecionar para outro site | onClick={() => window.open("https://youtu.be/ko70cExuzZM?si=OSh52P8D2FpXYGRu""_blank")}
                    className="w-full text-left px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    DuDudu&Edu
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Espaço para compensar navbar fixa */}
      <div className="pt-20" />

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center -mt-20">
          <p className="text-lg mb-2">Opa! me chamo</p>
          <h1 className="text-7xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <TypeAnimation />
          </h1>
          <p className="max-w-3xl text-base sm:text-lg leading-relaxed">
            Toda hora estudando a internet.
            <br />
            Um <span className="text-purple-200">código</span>, uma{" "}
            <span className="text-purple-200">linha</span>, um{" "}
            <span className="text-purple-200">projeto</span> de cada vez. 🛹™️
            <br />
            <br />
            <span className="text-purple-200">
              É um prazer te ver por aqui!
            </span>
          </p>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Brevemente:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <p className="text-base sm:text-lg leading-6 text-left">
              Meu nome é{" "}
              <span className="text-purple-300">
                Eduardo Porangaba Leite Ribeiro da Silva
              </span>
              , atualmente tenho 18 anos e trabalho como{" "}
              <span className="text-purple-400">Assistente de T.I. Júnior</span>{" "}
              na minha primeira empresa, venho trabalhando com projetos dentro
              da empresa e alguns pessoais, com foco em aprender mais sobre
              lógicas, códigos, <span className="text-purple-400">SQL</span>,{" "}
              <span className="text-purple-400">frameWorks</span>, programação
              no geral, e sinceramente?{" "}
              <span className="text-purple-400">Gosto muito</span> do que faço!
              <br />
              <br />
              Nascido e crescido na{" "}
              <span className="text-purple-400">capital</span> de{" "}
              <span className="text-purple-400">São Paulo</span>, atualmente
              moro em <span className="text-purple-400">Garuva SC</span>.
              <br />
              <br />
              Sou fascinado por{" "}
              <span className="text-purple-300">tecnologia</span> desde pequeno,
              um pouco nerd, mas <span className="text-purple-300">sempre</span>{" "}
              buscando aprender, por isso construi isso aqui.
              <br />
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
          Projeto pensado por Eduardo Porangaba usando Next.js, TypeScript e
          TailwindCSS.
          <br />© 2025 exclusive license.
        </footer>
      </main>
    </div>
  );
}
