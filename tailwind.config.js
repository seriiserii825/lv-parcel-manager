import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: "var(--primary)",
                    300: "var(--primary-light)",
                    700: "var(--primary-dark)",
                },
                dark: {
                    primary: {
                        DEFAULT: "var(--dark-primary)",
                        300: "var(--dark-primary-light)",
                        700: "var(--dark-primary-dark)",
                    },
                    color: "var(--dark-color)",
                },
                color: "var(--color)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
