<template>
  <div class="modals">
    <h1>Modals</h1>

    <button @click="showModal">Show modal</button>

    <teleport to=".modals-container">
      <div class="modal" v-show="isShown">
        <h2>This is a modal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, praesentium.</p>
        <button @click="hideModal">Hide modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isShown = ref(false)

const hideModal = () => isShown.value = false

const showModal = () => isShown.value = true
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