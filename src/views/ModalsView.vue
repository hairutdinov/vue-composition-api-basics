<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label v-for="(comp, key) of modalComponents" style="display: block">
        {{key}} <input type="radio" v-model="modalComponentTheme" :value="key">
      </label>
    </div>
    <button @click="showModal">Show modal</button>
    <component
        :is="modalComponent"
        v-model="isShown"
        title="This is a title (from prop)"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, praesentium.</p>
    </component>
  </div>
</template>

<script setup>
import {ref, shallowRef, watch} from 'vue'
import WhiteModal from '@/components/WhiteModal.vue'
import DarkModal from '@/components/DarkModal.vue'

const modalComponents = {
  WhiteModal,
  DarkModal
}

const isShown = ref(false)

const modalComponentTheme = ref('WhiteModal')
const modalComponent = shallowRef(modalComponents[modalComponentTheme])

const showModal = () => isShown.value = true

watch(modalComponentTheme, (modalComponentTheme) => {
  modalComponent.value = modalComponents[modalComponentTheme]
})


</script>

<style scoped>

</style>