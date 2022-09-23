const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui"),
		// custom utilities
		plugin(({addUtilities}) => {
			addUtilities({
				".container": {
					margin: "auto",
					maxWidth: "1280px",
					paddingLeft: "24px",
					paddingRight: "24px",
				}
			})
		})
	],
}

