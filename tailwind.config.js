import { content as _content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  _content(),
];
export const theme = {
  extend: {},
};
export const plugins = [
  plugin(),
];