<template>
  <div class="ly-count">
    <span ref="countRef">{{ number }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from 'vue'
import { CountUp } from 'countup.js'

export default defineComponent({
  name: 'LyCount',
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const countRef = ref<HTMLElement>()
    onMounted(() => {
      watchEffect(() => {
        const countUp = new CountUp(countRef.value!, props.number)
        countUp.start()
      })
    })
    return {
      countRef
    }
  }
})
</script>

<style scoped lang="less"></style>
