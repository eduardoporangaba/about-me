"use client";

import { TypeAnimation } from "react-type-animation";

export default function NameAnimation() {
  return (
    <div className="inline-block text-center">
      <TypeAnimation
        sequence={["Eduardo\nPorangaba"]}
        speed={3}
        wrapper="h1"
        className="uppercase tracking-wider font-black"
        style={{
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          fontSize: "clamp(2.5rem, 9vw + 1rem, 7rem)",
          fontWeight: 900,
          letterSpacing: "0.03em",
          background: "linear-gradient(to right, #c084fc, #f3e8ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 4px 12px rgba(192, 132, 252, 0.5))",
          textShadow: "0 4px 12px rgba(192, 132, 252, 0.4)",
          whiteSpace: "pre-line", // Respeitar a quebra de linha
          lineHeight: "1.1", // Linhas mais próximas, sem alterar tamanho geral
        }}
      />
    </div>
  );
}
