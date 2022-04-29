const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/pages/**/*.{ts,tsx}', './src/views/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: colors.indigo,
            },
        },
    },
    plugins: [],
}
