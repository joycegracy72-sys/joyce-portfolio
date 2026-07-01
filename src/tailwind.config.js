import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Fixed: Now watches your actual root components folder!
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a78bfa", // soft purple
        secondary: "#60a5fa", // blue
        accent: "#f472b6", // pink
      },
      backgroundImage: {
        gradientMesh: "radial-gradient(circle at 20% 20%, #a78bfa, #60a5fa, #f472b6)",
      },
    },
  },
  plugins: [],
};
export default config;