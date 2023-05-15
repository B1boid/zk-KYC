/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '1300px',
                xl: '1640px',
            },
            colors: {
                main: {
                    "or": "rgb(225,183,205)",
                    "orl": "rgb(251 146 60)",
                    "orll": "rgb(253 186 116)",
                    "orlll": "rgb(254 215 170)",
                }
            }
        },
    },
    plugins: [],
}
