<template>

  <teleport to=".modals-container">
    <div class="modal">

      <h2><slot name="title"></slot></h2>
      <slot></slot>
      <button @click="false">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
import { useSlots } from "vue"

const slots = useSlots()
console.log(slots.title())
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