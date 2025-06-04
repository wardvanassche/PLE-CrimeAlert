/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter_400Regular', 'sans-serif'],
                interitalic: ['Inter_400Regular_Italic', 'sans-serif'],
                intermedium: ['Inter_500Medium', 'sans-serif'],
                intersemibold: ['Inter_600SemiBold', 'sans-serif'],
                interbold: ['Inter_700Bold', 'sans-serif'],
                interbolditalic: ['Inter_700Bold_Italic', 'sans-serif'],
            },
        },
    },
    plugins: [],
};