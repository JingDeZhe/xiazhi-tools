declare global {
  interface ToolMeta {
    id: string
    title: string
    description: string
    group: string
    ignore?: boolean
  }
}

declare module '#app' {
  interface NuxtApp {
    $tools: Array<ToolMeta & { path: string }>
  }
}

export {}
