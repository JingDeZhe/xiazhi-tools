<template>
  <div @click="onClick" class="common-card">
    <div class="common-card_title">
      <span>{{ title }}</span>
    </div>
    <div>
      <p>{{ description }}</p>
    </div>
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
