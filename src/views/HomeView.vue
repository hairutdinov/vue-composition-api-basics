<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h4>{{ counter.counterTitle }}</h4>
    <div>
      <button class="btn" @click="counter.decrement">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increment">+</button>
    </div>
    <p>This counter is {{ counter.oddOrEven }}</p>

    <input type="text" v-autofocus>
  </div>
</template>


<style>

</style>

<script setup>
import {vAutofocus} from "../directives/vAutofocus"
import { useCounterStore } from "@/stores/counter.js"

const appTitle = 'My Amazing Counter App'
const counter = useCounterStore()

</script>