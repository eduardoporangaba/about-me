"use client";

import { useState } from "react";

const experiences = [
  {
    company: "Joinville Implementos",
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
    role: "Jovem Aprendiz de ADM/T.I.",
    period: "OUT 2024 - AGO 2025",
    highlights: [
      "Rotina de virificação manual do Wi-fi, Ramal e E-mails",
      "Conheciemento em ferramentas de sistema ERP, manutenção de estoque, cadastros e gerenciamento de materiais.",
      "Conhecimento básico em manutenção de hardware e software.",
    ],
  },
];

export default function ExperienceList() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row">
      <ul className="flex flex-col py-8 px-2">
        {experiences.map((exp, idx) => (
          <li
            key={exp.company + idx}
            className={`text-base cursor-pointer px-4 py-2 mb-2 transition-all
              ${
                selected === idx
                  ? "text-purple-400 border-l-2 border-purple-400 bg-[#192133]"
                  : "text-white-400 hover:text-purple-400"
              }
            `}
            onClick={() => setSelected(idx)}
          >
            {exp.company}
          </li>
        ))}
      </ul>
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-white mb-1">
          {experiences[selected].role}{" "}
          <span className="text-purple-400">
            @ {experiences[selected].company}
          </span>
        </h2>
        <div className="text-gray-400 mb-6">{experiences[selected].period}</div>
        <ul className="text-sm leading-7 space-y-4">
          {experiences[selected].highlights.map((item, i) => (
            <li key={i} className="flex items-start text-gray-300">
              <span className="text-purple-400 mr-3">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
