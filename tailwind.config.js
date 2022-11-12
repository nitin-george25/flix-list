/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                cursive: 'Righteous, cursive',
                sans: 'Doris, sans-serif',
            },
            fontWeight: {
                light: 200,
                normal: 300,
                medium: 400,
                bold: 500,
            },
            textColor: {
                primary: '#0C1B33',
                secondary: '#016FB9',
                neutral: '#E5E5E5',
                white: '#FFFFFF',
                black: '#342E37',
            },
            backgroundColor: {
                primary: '#0C1B33',
                secondary: '#016FB9',
                beige: '#EEEBD0',
                success: '#57A773',
                danger: '#A30000',
                neutral: '#E5E5E5',
                white: '#FFFFFF',
                black: '#342E37',
            },
        },
    },
    plugins: [],
};