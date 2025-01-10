<template>
  <el-container class="custom-layout">
    <el-header class="header">
      <div class="logo" @click="goHome">TOOLS</div>
      <div>
        <!-- 切换主题的 Switch -->
        <el-switch
          v-model="isDark"
          active-text="暗"
          inactive-text="明"
        ></el-switch>
      </div>
    </el-header>

    <el-container>
      <el-aside>
        <ToolList></ToolList>
      </el-aside>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core'

const router = useRouter()

// 使用 useDark 管理暗黑模式
const isDark = useDark()

const goHome = () => {
  router.push('/')
}
</script>

<style lang="scss">
.custom-layout {
  --at-apply: flex flex-col h-screen overflow-hidden;
  .header {
    --at-apply: flex items-center justify-between;
  }
  .logo {
    font-family: fantasy;
    --at-apply: text-2xl cursor-pointer;
  }
}
</style>
