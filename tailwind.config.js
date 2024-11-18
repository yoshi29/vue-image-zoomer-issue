import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */

export const darkMode = ["class"];
export const safelist = ["dark"];
export const prefix = "";
export const content = [
  "./pages/**/*.{ts,tsx,vue}",
  "./components/**/*.{ts,tsx,vue}",
  "./app/**/*.{ts,tsx,vue}",
  "./src/**/*.{ts,tsx,vue}",
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
};
export const plugins = [animate];
