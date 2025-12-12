"use client";

import { useState } from "react";

const experiences = [
  {
    company: "Joinville Implementos",
    shortCompany: "JIMP", // Abreviação para mobile
    role: "Assistente de T.I. Júnior",
    period: "SET 2025 - PRESENTE",
    highlights: [
      "Trabalhei para desenvolver uma tela de cadastro de dispositivos dentro do Web projeto da empresa, trabalhando com Node.js, React.js, TypeScript e JavaScript.",
      "Trabalhando no suporte e manutenção de software e hardware da empresa.",
      "Cuidados em Infra estrutura de rede, servidores e estações de trabalho.",
    ],
  },
  {
    company: "Joinville Implementos",
    shortCompany: "JIMP",
    role: "Jovem Aprendiz de ADM/T.I.",
    period: "OUT 2024 - AGO 2025",
    highlights: [
      "Rotina de virificação manual do Wi-fi, Ramal e E-mails",
      "Conhecimento em ferramentas de sistema ERP, manutenção de estoque, cadastros e gerenciamento de materiais.",
      "Conhecimento básico em manutenção de hardware e software.",
    ],
  },
];

export default function ExperienceList() {
  const [selected, setSelected] = useState(0);

  const currentExp = experiences[selected];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Abas das empresas */}
        <div className="flex lg:flex-col overflow-x-auto whitespace-nowrap lg:whitespace-normal lg:w-64 pb-2 lg:pb-0">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              aria-selected={selected === idx}
              className={`
                px-6 py-4 text-left font-medium transition-all duration-200 border-l-4 lg:border-l-2
                min-w-max lg:min-w-0 shrink-0 lg:shrink
                ${
                  selected === idx
                    ? "border-purple-400 bg-purple-900/20 text-purple-300 shadow-lg"
                    : "border-transparent text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-white/5"
                }
              `}
            >
              {/* Nome completo em telas ≥ lg (desktop), abreviado em telas menores */}
              <span className="hidden lg:inline">{exp.company}</span>
              <span className="lg:hidden">{exp.shortCompany}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo da experiência selecionada */}
        <div className="flex-1 min-w-0">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white">
              {currentExp.role}
              <span className="text-purple-400">
                {" @ "}
                {/* Mesmo truque aqui no @ empresa */}
                <span className="hidden lg:inline">{currentExp.company}</span>
                <span className="lg:hidden">{currentExp.shortCompany}</span>
              </span>
            </h3>
            <p className="text-gray-400 mt-2 mb-8">{currentExp.period}</p>

            <ul className="space-y-4">
              {currentExp.highlights.map((item, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <span className="text-purple-400 mt-1 shrink-0">▸</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
