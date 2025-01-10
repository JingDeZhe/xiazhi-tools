<template>
  <div class="grid grid-cols-[300px_1fr] gap-1">
    <div class="tool-grid">
      <ToolCard
        v-for="tool in filteredTools"
        :key="tool.id"
        :title="tool.title"
        :description="tool.description"
        :group="tool.group"
        @click="navigateToTool(tool.path)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// 组件
import ToolCard from '~/components/ToolCard.vue'
import ToolList from '~/components/ToolList.vue'

// 获取工具数据
const { $tools: tools } = useNuxtApp()

// 搜索关键词
const searchQuery = ref('')

// 选中的分组
const selectedGroup = ref('')

// 计算属性：过滤工具
const filteredTools = computed(() => {
  return tools.filter((tool) => {
    const matchesSearch = tool.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    const matchesGroup = selectedGroup.value
      ? tool.group === selectedGroup.value
      : true
    return matchesSearch && matchesGroup
  })
})

// 路由
const router = useRouter()

// 导航到工具详情页
const navigateToTool = (path: string) => {
  router.push(path)
}

// 选择分组
const selectGroup = (group: string) => {
  selectedGroup.value = group
}
</script>

<style>
.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
</style>
