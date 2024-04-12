/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                whiteShadow: "-6px -6px 10px #f9f9f9, 6px 6px 10px #00000026",
                hoverWhiteShadow:
                    "2px 2px 2px #f9f9f9, -2px -2px 2px #00000026",
            },
        },
    },
    plugins: [],
};
