<script setup lang="ts">
const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <a
        :href="url"
        class="px-3 py-2 rounded-lg bg-primary-700 dark:bg-dark-primary-300 hover:bg-primary-hover transition dark:hover:bg-dark-primary-hover"
        :class="{ 'bg-slate-700': active }"
    >
        <slot />
    </a>
</template>
