<template>
  <div>
    <h1>Tool 1</h1>
    <p>This is Tool 1.</p>
  </div>
</template>

<script lang="ts">
// 定义工具元数据
export const toolMeta = {
  id: 'tool-1',
  title: 'Tool 1',
  description: 'This is Tool 1.',
  group: 'Group A',
}
</script>

<script setup lang="ts">
console.log('tool-1')
</script>
