module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                forange: "#FF9933",
                fgreen: "#138808",
                fblue: "#000080",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
