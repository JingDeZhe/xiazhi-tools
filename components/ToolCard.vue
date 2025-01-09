<template>
  <div class="tool-card" @click="onClick">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
// 定义 props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
})

// 定义 emits
const emit = defineEmits(['click'])

// 点击事件
const onClick = () => {
  emit('click')
}
</script>

<style scoped>
.tool-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
