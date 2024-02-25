module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      backdropBlur: {
        '67': '67px',
      },
      borderRadius: {
        '20': '20px',
      },
      fontFamily: {
        // Agregamos Montserrat a las fuentes sans-serif y display
        sans: ['"Montserrat"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        'solana': { 
          fontFamily: {
            display: ['"Montserrat"', 'monospace'], // Usa Montserrat para display también
            body: ['"Montserrat"', 'sans-serif'], // Usa Montserrat para el cuerpo del texto
          },
          // ... el resto de tu configuración de tema ...
        },
      },
      // ... otros temas ...
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
