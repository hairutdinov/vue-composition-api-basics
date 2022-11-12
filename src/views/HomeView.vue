<template>
  <div class="home">
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>


<style>

</style>

<script setup>
import { ref } from 'vue'

const counter = ref(0);

const decreaseCounter = () => counter.value -= 1;
const increaseCounter = () => counter.value += 1;
</script>