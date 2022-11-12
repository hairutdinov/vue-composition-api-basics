<template>

  <teleport to=".modals-container">
    <div class="modal" v-if="modelValue">
      <h2>{{ title }}</h2>
      <slot></slot>
      <button @click="hideModal">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
import {defineEmits} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  modelValue: {
    type: Boolean,
    default: false,
  }
});

console.log(props.title)

const emit = defineEmits(['update:modelValue'])

const hideModal = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal {
  background-color: beige;
  padding: 10px;
  color: #000;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>