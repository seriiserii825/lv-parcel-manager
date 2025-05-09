<script setup lang="ts">
import DesktopSidebar from "../Components/DesktopSidebar.vue";
import AdminHeader from "../Components/AdminHeader.vue";
import MobileSidebar from "../Components/MobileSidebar.vue";
import {Head} from "@inertiajs/vue3";
</script>

<template>
    <Head>
        <title>Admin</title>
    </Head>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-700 min-h-screen">
        <DesktopSidebar/>
        <MobileSidebar/>
        <div class="flex flex-col flex-1 w-full">
            <AdminHeader/>
            <main class="h-full overflow-y-auto">
                <div class="container p-6 mx-auto grid">
                    <slot/>
                </div>
            </main>
        </div>
    </div>
</template>
