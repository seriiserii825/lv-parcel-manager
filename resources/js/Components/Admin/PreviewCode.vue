<script setup lang="ts">
import {ref} from "vue";
import { Vue3SlideUpDown } from "vue3-slide-up-down";
import Btn from "../Ui/Btn.vue";
const emits = defineEmits(["emit_click"]);
defineProps({
  show_copy_btn: {
    type: Boolean,
    default: false,
  },
  show_props: {
    type: Boolean,
    default: false,
  },
});
const show_code = ref(false);
const show_source = ref(false);
const toggle_props = ref(false);

function emitClick() {
  emits("emit_click");
}
</script>

<template>
  <div class="preview-code">
    <div class="p-4 border border-gray-500 rounded-sm mb-3">
      <slot></slot>
    </div>
    <footer class="flex justify-between gap-2">
      <Btn
        v-if="show_props"
        @emit_click="() => (toggle_props = !toggle_props)"
        >Props</Btn
      >
      <Btn v-if="show_copy_btn" color="btn-warning" @emit_click="emitClick"
        >Copy to clipboard</Btn
      >
      <Btn @emit_click="() => (show_code = !show_code)">How to use</Btn>
      <Btn
        @emit_click="() => (show_source = !show_source)"
        >Source Code</Btn
      >
    </footer>
    <Vue3SlideUpDown v-model="show_code">
      <div class="code-snippet">
        <pre>
          <slot name="code"></slot>
        </pre>
      </div>
    </Vue3SlideUpDown>
    <Vue3SlideUpDown v-model="show_source">
      <div class="code-snippet">
        <pre>
        <slot name="source"></slot>
      </pre>
      </div>
    </Vue3SlideUpDown>
    <Vue3SlideUpDown v-model="toggle_props">
      <div class="code-props">
        <slot name="code_props"></slot>
      </div>
    </Vue3SlideUpDown>
  </div>
</template>
