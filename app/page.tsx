"use client";
import Image from "next/image";
import ExperienceList from "./experiences";
import NameAnimation from "./nameAnimation";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-mono tracking-wide grid items-center min-h-screen xl:px-60 lg:px-30 md:px-10 px-10 pb-10">
      <nav className="w-470 py-4 flex gap-[60px] flex-wrap items-center justify-center fixed top-0 left-0 bg-background z-50">
        {/* LINKS EXISTENTES */}
        <a
          className="flex items-center gap-5 hover:underline hover:underline-offset-4"
          href="https://youtube.com/@filipedeschamps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert sm:w-15 sm:h-4"
            aria-hidden
            src="/youtube.svg"
            alt="Youtube icon"
            width={20}
            height={20}
          />
          <span className="hidden sm:block">Youtube</span>
        </a>
        <a
          className="flex items-center gap-5 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/edu.prl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert sm:w-15 sm:h-4"
            aria-hidden
            src="/instagram.svg"
            alt="Instagram icon"
            width={100}
            height={100}
          />
          <span className="hidden sm:block">Instagram</span>
        </a>
        {/*talvez o único jeito de comentar no código, já que nâo é possivel por \\*/}
        <a
          className="flex items-center gap-5 hover:underline hover:underline-offset-4"
          href="https://github.com/eduardoporangaba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert sm:w-15 sm:h-4"
            aria-hidden
            src="/gitHub.svg"
            alt="GitHub icon"
            width={500}
            height={500}
          />
          <span className="hidden sm:block">GitHub</span>
        </a>
        <a
          className="flex items-center gap-5 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/eduardo-porangaba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert sm:w-15 sm:h-4"
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={20}
            height={20}
          />
          <span className="hidden sm:block">Linkedin</span>
        </a>
        {/* ---- NOVO MENU ⋮ ---- */}
        <div className="relative ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
                text-2xl 
                px-2 py-1 
                rounded-md 
                transition-all duration-200 
                hover:bg-neutral-200 dark:hover:bg-neutral-800 
                active:scale-90 
                hover:scale-110
              "
          >
            ⋮
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-900 shadow-lg rounded-lg py-2 flex flex-col text-sm">
              <a
                onClick={() => {
                  window.location.href = "/app/meetMe";
                }}
                className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Sobre mim
              </a>
              <a
                onClick={() => {
                  window.location.href = "mail:eduardoporangaba2@gmail.com";
                }}
                className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Contato
              </a>
            </div>
          )}
        </div>
        {/* ---- FIM DO NOVO MENU ---- */}{" "}
        <a
          onClick={() => {
            window.location.href =
              "https://youtu.be/ko70cExuzZM?si=OSh52P8D2FpXYGRu";
          }}
          className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          DuDudu&Edu
        </a>
      </nav>

      <main className="flex text-lg flex-col row-start-2">
        <div className="flex min-h-screen text-lg flex-col row-start-2 items-center justify-center">
          Opa! sou
          <h1 className="text-5xl mt-3 mb-5 text-center">
            <NameAnimation />
          </h1>
          <p className="max-w-5xl text-base leading-7 text-center">
            Um jovem garoto estudando a internet.
            <br />
            <span className="text-purple-400">Sempre</span> com vontade de
            aprender e isso é a <span className="text-purple-400">força</span>{" "}
            que me move. 🛹™️
            <br />
            <span className="text-purple-400">
              É um prazer te ver por aqui!
            </span>
          </p>
        </div>

        <h1 id="sobre" className="text-left font-bold text-2xl">
          Brevemente:
        </h1>
        <div className="flex flex-col sm:flex-row mb-10 items-center sm:items-start">
          <p className="my-10 leading-7 sm:mr-60 text-base text-left">
            Meu nome é{" "}
            <span className="text-purple-400">
              Eduardo Porangaba Leite Ribeiro da Silva
            </span>
            , atualmente, tenho 18 anos e trabalho como{" "}
            <span className="text-purple-400">Assistente de T.I. Júnior</span>{" "}
            na minha primeira empresa, e sinceramente?{" "}
            <span className="text-purple-400">AMO</span> oque faço!
            <br />
            <br />
            Sou fascinado por{" "}
            <span className="text-purple-400">tecnologia</span> desde pequeno,
            um pouco nerd, mas <span className="text-purple-400">sempre</span>{" "}
            com vontade de mexer com as máquinas.
            <br />
            <br />
            Nascido e crescido em{" "}
            <span className="text-purple-400">São Paulo</span>, atualmente moro
            em <span className="text-purple-400">Garuva Sᴄ</span>.
          </p>
          <Image
            className="rounded-lg object-cover"
            alt="Du Porangaba"
            src="/eu_deverdade.png"
            width={500}
            height={500}
          />
        </div>

        <h1 id="experiencia" className="text-left mb-10 font-bold text-2xl">
          Experiências:
        </h1>
        <ExperienceList />

        <footer className="text-center text-sm text-gray-500 mt-20">
          Projeto adaptado por Eduardo Porangaba usando Next.js, TypeScript e
          TailwindCSS.
          <br /> © 2025, Portfólio de Apresentação Pessoal.
        </footer>
      </main>
    </div>
  );
}
