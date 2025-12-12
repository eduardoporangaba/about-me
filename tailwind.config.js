module.exports = {
  theme: {
    fontSize: {
      base: "3rem",
    },
    extend: {},
    screens: {
      sm: "640px",
      msm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Sobrescreve o sans padrão com Inter (moderna)
        serif: ["Merriweather", "serif"], // Adiciona Merriweather (elegante serif)
        mono: ["Fira Code", "monospace"], // Mono com Fira Code (boa para dev)
        display: ["Playfair Display", "serif"], // Para títulos chamativos
        heading: ["Montserrat", "sans-serif"], // Sans bold para headings
        body: ["Open Sans", "sans-serif"], // Sans leve para textos
        script: ["Dancing Script", "cursive"], // Cursive para elementos decorativos
      },
    },
  },
};
