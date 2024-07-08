// @ts-nocheck
import { resolve } from "path";

export default defineNuxtConfig({
	alias: {
		"@": resolve(__dirname, "/"),
	},

	css: ["~/assets/main.scss"],
	modules:["@nuxt/content", "@nuxt/image"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	devtools: { enabled: false },
	components: true,
	target: 'static',
	ssr:false,
	compatibilityDate: "2024-07-05",
});