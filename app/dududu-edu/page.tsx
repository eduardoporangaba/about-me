"use client";

export default function DududuEdu() {
  return (
    <div className="min-h-screen bg-background font-mono tracking-wide flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-8">
        Página em desenvolvimento . . .
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2"></h2>
      <p className="text-lg max-w-2xl">
        Apresentação de projetos.
        <br />
        <a
          href="https://www.instagram.com/palmeiras/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-300 underline"
        >
          SE Palmeiras
        </a>
      </p>
      {/* Adicione mais elementos aqui, como embeds, imagens, etc. */}
      <footer className="text-center text-sm text-gray-500 py-6 mt-10 border-t border-neutral-200 dark:border-neutral-800">
        Projeto pensado por Eduardo Porangaba usando Next.js, TypeScript e
        TailwindCSS.
        <br />© 2025 exclusive license.
      </footer>
    </div>
  );
}
