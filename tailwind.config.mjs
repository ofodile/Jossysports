/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
       // customNav:  '#243127',
     //   customNav:  '#11302a',
        customNav:  '#004100',
        customNav:  '#FFFFFF',
        siteColor:  '#ff3d00',
        customGray: '#2F4F4F',
      },
    },
  },
  plugins: [],
};
