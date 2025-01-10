<template>
  <el-menu :default-active="activeMenu" class="tool-menu" router>
    <el-sub-menu
      v-for="group in groupedTools"
      :key="group.name"
      :index="group.name"
    >
      <template #title>
        <span>{{ group.name }}</span>
      </template>
      <el-menu-item
        v-for="tool in group.tools"
        :key="tool.id"
        :index="tool.path"
      >
        {{ tool.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
const { $tools: tools } = useNuxtApp()

const route = useRoute()

// 高亮的菜单项，默认为当前路由路径
const activeMenu = ref<string>(route.path)

watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath
  }
)

// 根据 group 分组工具
const groupedTools = computed(() => {
  const groups = new Map<string, { name: string; tools: any[] }>()

  tools.forEach((tool) => {
    if (!groups.has(tool.group)) {
      groups.set(tool.group, {
        name: tool.group,
        tools: [],
      })
    }
    groups.get(tool.group)?.tools.push(tool)
  })

  return Array.from(groups.values())
})
</script>

<style scoped>
.tool-menu {
  border-right: none;
}
</style>
