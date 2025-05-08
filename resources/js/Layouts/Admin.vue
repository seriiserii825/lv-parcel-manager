<script setup lang="ts">
import { usePage } from "@inertiajs/vue3";
import NavLink from "../Components/NavLink.vue";
import { switchTheme } from "../utils/theme";
import DesktopSidebar from "../Components/DesktopSidebar.vue";
import AdminHeader from "../Components/AdminHeader.vue";

function changeTheme() {
    switchTheme();
}
const { component } = usePage();
const is_home = component === "Home";
const is_register = component === "Auth/Register";
</script>

<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900 min-h-screen">
        <DesktopSidebar/>
        <MobileSidebar/>
        <div class="flex flex-col flex-1 w-full">
            <AdminHeader/>
            <main class="h-full overflow-y-auto">
                <div class="container px-6 mx-auto grid"></div>
            </main>
        </div>
    </div>
</template>
