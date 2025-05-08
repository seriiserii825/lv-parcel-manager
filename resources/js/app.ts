import "../css/app.css";
import { createApp, DefineComponent, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import Main from "./Layouts/Main.vue";
import {setThemeOnLoad} from "./utils/theme";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<DefineComponent>("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];

        page.default.layout = page.default.layout || Main;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
        includeCSS: true,
        showSpinner: true,
    }
});

setThemeOnLoad();
