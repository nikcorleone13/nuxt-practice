// @ts-nocheck
import { resolve } from "path";

export default defineNuxtConfig({
	alias: {
		"@": resolve(__dirname, "/"),
	},

	css: ["~/assets/main.scss"],
	modules:["@nuxt/content"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	// tailwind : {
	// 	content: [
	// 	  "./components/**/*.{js,vue,ts}",
	// 	  "./layouts/**/*.vue",
	// 	  "./pages/**/*.vue",
	// 	  "./plugins/**/*.{js,ts}",
	// 	  "./app.vue",
	// 	  "./error.vue",
	// 	],
	// 	theme: {
	// 	  extend: {},
	// 	},
	// 	plugins: [],
	//   },
	devtools: { enabled: false },
	components: true,
	compatibilityDate: "2024-07-05",
});