<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h4>{{ counterData.title }}</h4>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter(2)">+</button>
    </div>
  </div>
</template>


<style>

</style>

<script setup>
import { reactive } from 'vue'

const appTitle = 'My Amazing Counter App';
const counterData = reactive({
  count: 0,
  title: 'My counter',
})

const decreaseCounter = () => counterData.count -= 1;
const increaseCounter = amount => counterData.count += amount;
</script>