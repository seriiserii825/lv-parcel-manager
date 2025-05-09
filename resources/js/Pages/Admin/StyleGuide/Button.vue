<script setup lang="ts">
import PreviewCode from "../../../Components/Admin/PreviewCode.vue";
import Btn from "../../../Components/Ui/Btn.vue";
import useCopyToClipboard from "../../../Composables/useCopyToClipboard";

const btn_default = `<Btn @emit_click="console.log('')">Edit</Btn>`;
const btn_success = `<Btn @emit_click="console.log('')" color="success">Edit</Btn>`;
const btn_danger = `<Btn @emit_click="console.log('')" color="danger">Edit</Btn>`;
const btn_warning = `<Btn @emit_click="console.log('')" color="warning">Edit</Btn>`;
</script>

<template>
    <div class="flex">
        <PreviewCode :show_props="true">
            <template #default>
                <div class="flex gap-2 flex-wrap">
                    <div @click="useCopyToClipboard(btn_default)">
                        <Btn @emit_click="console.log('')">Default</Btn>
                    </div>
                    <div @click="useCopyToClipboard(btn_success)">
                        <Btn @emit_click="console.log('')" color="success">Success</Btn>
                    </div>
                    <div @click="useCopyToClipboard(btn_danger)">
                        <Btn @emit_click="console.log('')" color="danger">Danger</Btn>
                    </div>
                    <div @click="useCopyToClipboard(btn_warning)">
                        <Btn @emit_click="console.log('')" color="warning">Warning</Btn>
                    </div>
                </div>
            </template>
        </PreviewCode>
    </div>
</template>
