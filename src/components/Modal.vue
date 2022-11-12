<template>

  <teleport to=".modals-container">
    <div class="modal">
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
  }
});

console.log(props.title)

const emit = defineEmits(['hideModal'])

const hideModal = () => {
  emit('hideModal')
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