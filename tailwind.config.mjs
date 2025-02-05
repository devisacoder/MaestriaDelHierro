/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				yellow: '#FC9B3C',
				azulPetroleo: '#222C35',
				grisClaro: '#B6B6B6',
				grisOscuro: '#B6B6B6',
				yellow_two:"#fcaf3c",
				custom_yellow:"#f9a34f",
				grayBackground: "#D9D9D9"
			},  
			fontFamily: {
				sans: ['Roboto', 'sans-serif'], 
				work: ['Work Sans', 'sans-serif'], 
				sawarabi: ['Sawarabi Mincho', 'serif'],
				raleway: ['Releway', 'serif'],
				robotoSlab: ['Roboto Slab', 'serif']
			},
			boxShadow: {
				custom: '0 4px 10px rgba(0, 0, 0, 0.20)',
			}
		},
		screens: {
			xs: '420px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		  },
	},
	plugins: [],
}
