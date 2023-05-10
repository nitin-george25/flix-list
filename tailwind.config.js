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
                primary: '#1d3557',
                secondary: '#016FB9',
                neutral: '#E5E5E5',
                'neutral-2': '#6c757d',
                white: '#FFFFFF',
                black: '#342E37',
            },
            backgroundColor: {
                primary: '#1d3557',
                secondary: '#457b9d',
                accent: '#a8dadc',
                beige: '#f1faee',
                success: '#57A773',
                danger: '#A30000',
                neutral: '#E5E5E5',
                white: '#FFFFFF',
                black: '#342E37',
            },
            borderColor: {
                primary: '#1d3557',
                secondary: '#457b9d',
                accent: '#a8dadc',
                beige: '#f1faee',
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