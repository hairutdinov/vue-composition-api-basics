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

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    decreaseCounter() {
      this.counter -= 1;
    },
    increaseCounter() {
      this.counter += 1;
    },
  }
}
</script>