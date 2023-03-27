/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xg: "2000px",
        },
        backgroundImage: {
            'signin': "url('../assets/signin.jpg')",
            'signup': "url('../assets/signup.png')",
          },
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
