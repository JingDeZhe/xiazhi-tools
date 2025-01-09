<template>
  <div class="tool-list">
    <input v-model="searchQuery" placeholder="Search tools..." />
    <ul>
      <li
        v-for="group in groups"
        :key="group"
        @click="selectGroup(group)"
        :class="{ active: selectedGroup === group }"
      >
        {{ group }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 定义 props
const props = defineProps({
  tools: {
    type: Array as () => Array<{
      id: string
      title: string
      description: string
      group: string
    }>,
    required: true,
  },
})

// 定义 emits
const emit = defineEmits(['select'])

// 搜索关键词
const searchQuery = ref('')

// 选中的分组
const selectedGroup = ref('')

// 计算属性：获取所有分组
const groups = computed(() => {
  const groups = new Set(props.tools.map((tool) => tool.group))
  return Array.from(groups)
})

// 选择分组
const selectGroup = (group: string) => {
  selectedGroup.value = group
  emit('select', group)
}
</script>

<style scoped>
.tool-list {
  width: 200px;
  float: left;
  margin-right: 16px;
}

.tool-list ul {
  list-style-type: none;
  padding: 0;
}

.tool-list li {
  cursor: pointer;
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
  border-radius: 4px;
}

.tool-list li:hover {
  background-color: #f0f0f0;
}

.tool-list li.active {
  background-color: #e0e0e0;
}
</style>
