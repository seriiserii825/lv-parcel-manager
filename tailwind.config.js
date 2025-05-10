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
                    light: "var(--primary-light)",
                },
                dark: {
                    primary: {
                        DEFAULT: "var(--dark-primary)",
                        light: "var(--dark-primary-light)",
                    },
                    color: "var(--dark-color)",
                },
                color: "var(--color)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
