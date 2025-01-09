import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  // 搜集所有工具的元数据
  const tools = [] as any[]

  // 动态导入工具组件
  const toolModules = import.meta.glob('~/components/tools/*.vue', {
    eager: true,
    import: 'toolMeta',
  }) as Record<string, any>

  for (const path in toolModules) {
    const toolMeta = toolModules[path] as ToolMeta
    if (toolMeta.ignore !== true) {
      tools.push({
        ...toolMeta,
        path: path.replace('/components/tools/', '/tools/').replace('.vue', ''),
      })
    }
  }

  // 将工具数据注入到 Nuxt 上下文中
  nuxtApp.provide('tools', tools)
})
