<script setup>
import { switchTheme } from "../utils/theme";

function changeTheme() {
    switchTheme();
}
</script>

<template>
    <header
        class="bg-slate-800 text-slate-100"
    >
        <nav
            class="p-6 mx-auto max-w-screen-lg flex items-center justify-between"
        >
            <a href="/">Home</a>
            <button
                @click="changeTheme"
                class="hover:bg-slate-700 w-6 h-6 grid place-items-center rounded-full hover:outline outline-1 outline-white"
            >
                <i class="fa-solid fa-circle-half-stroke"></i>
            </button>
        </nav>
    </header>

    <main class="p-6 mx-auto max-w-screen-lg">
        <slot />
    </main>
</template>
