import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const counterTitle = ref('My counter title')

  const increment = () => count.value++
  const decrement = () => count.value--
  const oddOrEven = computed(() => count.value % 2 === 0 ? 'even' : 'odd')

  return { count, counterTitle, increment, decrement, oddOrEven }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
