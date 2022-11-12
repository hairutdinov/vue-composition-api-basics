<template>
  <div class="about">
    <h1>Posts</h1>
    <ul>
      <li>
        <RouterLink to="/postDetail/1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/2">Post 2</RouterLink>
      </li>
    </ul>
  </div>

  <button @click="increase">
    {{counterData.count}}
  </button>
</template>

<script setup>
import { useCounter} from "../use/useCounter";
const {counterData, increase} = useCounter()
</script>
