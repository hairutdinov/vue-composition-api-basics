<template>
  <div class="about">
    <h1>This is a post detail</h1>
    <p>Post with id {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post Id</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToSecondPost">Go to second post</button>
    </div>
    <div>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute(),
    router = useRouter()

const showPostId = async () => {
  console.log(
      route.params.id
  )
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    // router.push('/')
    router.push({ name: 'home' })
  }, 3000)
}

const goToSecondPost = () => {
    router.push({ name: 'postDetail', params: { id: 2 } })
}
</script>