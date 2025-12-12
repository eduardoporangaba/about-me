"use client";

import { TypeAnimation } from "react-type-animation";

export default function NameAnimation() {
  return (
    <div className="inline-block text-center">
      <TypeAnimation
        sequence={["Eduardo Porangaba"]}
        speed={3}
        wrapper="h1"
        className="uppercase tracking-wider font-black"
        style={{
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          fontSize: "clamp(2.5rem, 9vw + 1rem, 7rem)", // Pequeno no celular, gigante no desktop
          fontWeight: 900,
          letterSpacing: "0.12em",
          background: "linear-gradient(to right, #c084fc, #f3e8ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 4px 12px rgba(192, 132, 252, 0.5))",
          textShadow: "0 4px 12px rgba(192, 132, 252, 0.4)",
        }}
      />
    </div>
  );
}
