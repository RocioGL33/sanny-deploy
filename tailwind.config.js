/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7F0212",
          secondary: "#B90D25",
          neutral: "#3D3D3D",
          "base-100": "#070707",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
