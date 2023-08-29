/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				rise: {
					'0%': { transform: 'scaleY(0.9)' },
          '100%': { transform: 'scaleY(1)' },
				}
			},
			animation: {
				rise: 'rise 0.4s ease-out 1 forwards',
			}
		},
	},
	plugins: [],
}
