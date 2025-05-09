<script setup lang="ts">
import SidebarLink from "./Admin/SidebarLink.vue";
</script>

<template>
    <aside
        class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
    >
        <div class="py-4 text-gray-500 dark:text-gray-400">
            <ul class="pt-6">
                <SidebarLink
                    route_name="home"
                    text="Home"
                    icon="fa-solid fa-house"
                />
                <SidebarLink
                    route_name="admin"
                    text="Dashboard"
                    icon="fas fa-tachometer-alt"
                />
                <SidebarLink
                    route_name="admin"
                    text="Submenu"
                    icon="fas fa-tachometer-alt"
                    :sub_menu="[
                        {
                            text: 'Login',
                            route_name: 'admin',
                        },
                        {
                            text: 'Register',
                            route_name: 'admin',
                        },
                    ]"
                />
            </ul>
        </div>
    </aside>
</template>
