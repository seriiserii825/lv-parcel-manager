<script setup>
import { usePage } from "@inertiajs/vue3";
import NavLink from "../Components/NavLink.vue";
import { switchTheme } from "../utils/theme";

const { component } = usePage();
const is_home = component === "Home";
const is_register = component === "Auth/Register";
const page = usePage();
const is_logged_in = !!page.props.auth?.user;

</script>

<template>
    <header class="bg-slate-800 text-slate-100">
        <nav
            class="p-6 mx-auto max-w-screen-lg flex items-center justify-between"
        >
            <NavLink url="/" :active="is_home">Home</NavLink>
            <div class="flex items-center space-x-6">
                <NavLink v-if="!is_logged_in" url="/register" :active="is_register"
                    >Register</NavLink
                >
                <NavLink v-else url="/logout">Logout</NavLink>
                <button
                    @click="switchTheme"
                    class="hover:bg-slate-700 w-6 h-6 grid place-items-center rounded-full hover:outline outline-1 outline-white"
                >
                    <i class="fa-solid fa-circle-half-stroke"></i>
                </button>
                <NavLink class="flex gap-2 items-center" url="/admin">
                    <i class="fa-solid fa-user"></i>
                    <span>Admin</span>
                </NavLink>
            </div>
        </nav>
    </header>

    <main class="p-6 mx-auto max-w-screen-lg">
        <slot />
    </main>
</template>
