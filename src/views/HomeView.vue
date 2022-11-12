<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h4>{{ counterData.title }}</h4>
    <div>
      <button class="btn" @click="decrease">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increase">+</button>
    </div>
    <p>This counter is {{ oddOrEven }}</p>

    <input type="text" v-autofocus>
  </div>
</template>


<style>

</style>

<script setup>
import {vAutofocus} from "../directives/vAutofocus";
import { useCounter } from '../use/useCounter'

const { counterData, increase, decrease, oddOrEven } = useCounter();

const appTitle = 'My Amazing Counter App';

</script>