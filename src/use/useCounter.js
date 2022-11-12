import {computed, reactive, watch} from "vue";

const counterData = reactive({
    count: 0,
    title: 'My counter',
})

export function useCounter() {

    const increase = () => counterData.count++;
    const decrease = () => counterData.count--;

    const oddOrEven = computed(() => counterData.count % 2 === 0 ? 'even' : 'odd')

    watch(() => counterData.count, (newValue, oldValue) => {
        console.log('newValue', newValue)
    })

    return {
        counterData,
        increase,
        decrease,
        oddOrEven,
    }
}