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
                    300: "var(--primary-300)",
                    700: "var(--primary-700)",
                    hover: "var(--primary-hover)",
                },
                dark: {
                    primary: {
                        DEFAULT: "var(--dark-primary)",
                        300: "var(--dark-primary-300)",
                        700: "var(--dark-primary-700)",
                        hover: "var(--dark-primary-hover)",
                    },
                    color: "var(--dark-color)",
                },
                color: "var(--color)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
