/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: [],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
}
