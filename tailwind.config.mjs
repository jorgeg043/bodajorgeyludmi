/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                // Una sola definición limpia
                'cookie': ['"Cookie"', 'cursive'],
            },
        },
    },
    plugins: [],
}