<template>
  <div class="modals">
    <h1>Modals</h1>

    <button @click="showModal">Show modal</button>
    <Modal
        v-if="isShown"
        title="This is a title (from prop)"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, praesentium.</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const isShown = ref(false)

const hideModal = () => isShown.value = false
const showModal = () => isShown.value = true
</script>

<style scoped>

</style>