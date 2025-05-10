<script setup lang="ts">
const model = defineModel();

defineProps({
    name: String,
});
</script>

<template>
    <div class="flex items-center gap-2">
        <input
            type="checkbox"
            v-model="model"
            :id="name"
            class="rounded-md border-1 outline-0 text-indigo-500 ring-indigo-500 border-slate-700"
        />
        <label
            :for="name"
            class="block text-sm font-medium dark:text-dark-color cursor-pointer"
        >
            <slot />
        </label>
    </div>
</template>
