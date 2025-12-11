"use client";

import { TypeAnimation } from "react-type-animation";

export default function NameAnimation() {
  const longest = "Eduardo Porangaba";
  return (
    <div style={{ display: "inline-block", minWidth: `${longest.length}ch` }}>
      <TypeAnimation
        sequence={["Eduardo Porangaba"]}
        speed={3}
        style={{
          fontFamily: "Impact, sans-serif",
          fontSize: "1.9em",
          fontWeight: "bold",
          textTransform: "uppercase",
          background: "linear-gradient(to right, #c084fc, #f3e8ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0px 0px 2px rgba(192, 132, 252, 0.3))",
        }}
      />
    </div>
  );
}

//"use client";import { TypeAnimation } from "react-type-animation";export default function NameAnimation() {const longest = "Eduardo Porangaba";return (<div className="inline-block"><TypeAnimationsequence={["Eduardo Porangaba"]}speed={3}  wrapper="h1"className="inline-block font-bold uppercase tracking-wider"style={{
fontSize: "clamp(3rem, 10vw, 7rem)"; // Perfeito em celular até desktop grandeletterSpacing: "0.1em",background: "linear-gradient(to right, #a855f7, #e879f9, #f3e8ff)", // Roxo forte → rosa suave → quase branco (impacto + elegância)WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 4px 8px rgba(168, 85, 247, 0.4))", // Glow mais visível e bonitotextShadow: "0 4px 12px rgba(168, 85, 247, 0.3)", // Reforço para navegadores sem -webkitmaxWidth: "100%",wordBreak: "break-word",}}/></div);}
//A PARTE DE CIMA FAZ PARTE DO NOVO LAYOUT MAIS MODERNO (TALVEZ)
