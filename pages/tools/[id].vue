<template>
  <component :is="toolComponent" v-if="toolComponent" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// 获取路由参数
const route = useRoute()
const toolId = route.params.id as string

// 动态加载工具组件
const toolComponent = shallowRef(null)

onMounted(async () => {
  console.log(toolId)
  const module = await import(`~/components/tools/${toolId}.vue`)
  toolComponent.value = module.default
})
</script>

<script lang="ts">
export const toolMeta = {
  ignore: true,
}
</script>
