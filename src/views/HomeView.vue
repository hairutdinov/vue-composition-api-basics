<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h4>{{ counterData.title }}</h4>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter(1)">+</button>
    </div>
    <p>This counter is {{ oddOrEven }}</p>
  </div>
</template>


<style>

</style>

<script setup>
import {computed, reactive, watch} from 'vue'

const appTitle = 'My Amazing Counter App';
const counterData = reactive({
  count: 0,
  title: 'My counter',
})

watch(() => counterData.count, (newValue, oldValue) => {
  console.log('newValue', newValue)
})

const oddOrEven = computed(() => counterData.count % 2 === 0 ? 'even' : 'odd')

const decreaseCounter = () => counterData.count -= 1;
const increaseCounter = amount => counterData.count += amount;
</script>