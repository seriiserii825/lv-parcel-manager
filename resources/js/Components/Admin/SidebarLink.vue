<script setup lang="ts">
import {PropType} from 'vue';

type TSubmenu = {
    text: string;
    route_name: string;
};
const props = defineProps({
    route_name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    sub_menu: {
        type: Array as PropType<TSubmenu[]>,
        default: () => [],
    },
});
</script>

<template>
    <li class="relative px-6 py-3">
        <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :href="route(route_name)"
        >
            <i :class="icon"></i>
            <span class="ml-4">{{ text }}</span>
        </a>
    </li>
    <ul
        class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
        aria-label="submenu"
    >
        <li
            class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        >
            <a class="w-full" href="pages/login.html">Login</a>
        </li>
    </ul>
</template>
