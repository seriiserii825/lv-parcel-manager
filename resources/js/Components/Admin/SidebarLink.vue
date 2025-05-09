<script setup lang="ts">
import { PropType, ref } from "vue";

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

const is_visible_submenu = ref(false);
const toggleSubmenu = () => {
    is_visible_submenu.value = !is_visible_submenu.value;
};
</script>

<template>
    <li class="relative px-6 py-3">
        <a
            class="inline-flex items-center gap-2 w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :href="route(route_name)"
            v-if="!sub_menu.length"
        >
            <i :class="icon"></i>
            <div class="relative top-0.5">{{ text }}</div>
            <i v-if="sub_menu.length" class="fa-solid fa-caret-down"></i>
        </a>
        <a
            class="inline-flex items-center gap-2 w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="#"
            v-else
            @click.prevent="toggleSubmenu"
        >
            <i :class="icon"></i>
            <div class="relative top-0.5">{{ text }}</div>
            <i v-if="sub_menu.length" class="fa-solid fa-caret-down"></i>
        </a>
    </li>
    <ul
        v-if="sub_menu.length && is_visible_submenu"
        class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
        aria-label="submenu"
    >
        <li
            v-for="item in sub_menu"
            class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        >
            <a class="w-full" :href="route(item.route_name)">{{ item.text }}</a>
        </li>
    </ul>
</template>
