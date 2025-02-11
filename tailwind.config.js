import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	},
	theme: {
		extend: {},
	},
	plugins: [daisyui],
};
