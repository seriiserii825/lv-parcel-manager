<script setup lang="ts">
const model = defineModel();
defineProps({
    label: String,
    icon: String,
    placeholder: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "text",
    },
    error: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <div>
        <label :for="label" class="block dark:text-dark-color text-sm font-medium">
            {{ label }}
        </label>

        <div class="relative mt-1 rounded-md">
            <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
                <span class="grid place-content-center text-sm dark:text-dark-color">
                    <i :class="`fa-solid fa-${icon}`"></i>
                </span>
            </div>
            <input
                :type="type"
                :name="label"
                :placeholder="placeholder"
                v-model="model"
                class="bg-primary text-color dark:bg-dark-primary dark:text-dark-color placeholder:text-red-500 block w-full rounded-md pr-3 pl-9 text-sm border-slate-300 outline-0 focus:ring-1 focus:ring-inset focus:ring-indigo-400 focus:border-indigo-400"
            />
        </div>
        <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ error }}
        </p>
    </div>
</template>
