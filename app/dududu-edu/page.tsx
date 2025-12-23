"use client";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background font-mono tracking-wide flex flex-col items-center justify-between text-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Sobre Mim</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Eduardo Porangaba
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mb-12">
          Olá! Sou Eduardo, um entusiasta de tecnologia trabalhando como
          Assistente na área de desenvolvimento. Minha jornada envolve projetos
          com JavaScript, TypeScript, React, HTML e CSS, aplicados tanto em
          iniciativas pessoais quanto profissionais, mesmo que não seja minha
          função principal. Com experiência ainda em crescimento, aprendo algo
          novo todos os dias e busco evoluir para me tornar um desenvolvedor
          Full-Stack e, eventualmente, um Engenheiro de Software.
          <br />
          <br />
          Meu foco está em criar soluções limpas, eficientes e user-friendly,
          sempre priorizando boas práticas e inovação.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
          Portfólio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 w-full mb-12">
          <div className="bg-neutral-100 dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Projeto Pessoal 1
            </h3>
            <p className="text-sm sm:text-md mb-4">
              Uma aplicação web simples usando React e TailwindCSS para
              gerenciar tarefas diárias.
            </p>
            <a
              href="https://link-do-projeto.com"
              className="text-blue-500 hover:underline"
            >
              Ver Projeto
            </a>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Projeto Profissional 1
            </h3>
            <p className="text-sm sm:text-md mb-4">
              Contribuição em um dashboard interno com TypeScript e Next.js para
              monitoramento de métricas.
            </p>
            <a
              href="https://link-do-projeto.com"
              className="text-blue-500 hover:underline"
            >
              Ver Projeto
            </a>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Projeto Pessoal 2
            </h3>
            <p className="text-sm sm:text-md mb-4">
              Site portfólio estático com HTML, CSS e JavaScript para exibir
              trabalhos criativos.
            </p>
            <a
              href="https://link-do-projeto.com"
              className="text-blue-500 hover:underline"
            >
              Ver Projeto
            </a>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Projeto Profissional 2
            </h3>
            <p className="text-sm sm:text-md mb-4">
              Integração de API em um app React para exibir dados em tempo real.
            </p>
            <a
              href="https://link-do-projeto.com"
              className="text-blue-500 hover:underline"
            >
              Ver Projeto
            </a>
          </div>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 py-6 w-full border-t border-neutral-200 dark:border-neutral-800">
        Projeto pensado por Eduardo Porangaba usando Next.js, TypeScript e
        TailwindCSS.
        <br />© 2025 exclusive license.
      </footer>
    </div>
  );
}
