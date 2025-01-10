<template>
  <div class="all-center">
    <div class="flex flex-col gap-2 p-2 min-w-md">
      <!-- 选择 UUID 类型 -->
      <div class="flex gap-2">
        <el-select
          v-model="selectedType"
          placeholder="选择 UUID 类型"
          class="flex-1"
        >
          <el-option
            v-for="type in uuidTypes"
            :key="type.value"
            :label="type.label"
            :value="type.value"
          />
        </el-select>
        <el-switch
          v-model="removeSplit"
          active-text="去掉分隔"
          inactive-text="保留分隔"
          inline-prompt
        ></el-switch>
      </div>

      <!-- 输入命名空间（v3 和 v5 需要） -->
      <el-input
        v-if="selectedType === 'v3' || selectedType === 'v5'"
        v-model="namespace"
        placeholder="输入命名空间（UUID 格式）"
      />

      <!-- 输入名称（v3 和 v5 需要） -->
      <el-input
        v-if="selectedType === 'v3' || selectedType === 'v5'"
        v-model="name"
        placeholder="输入名称"
      />

      <!-- 生成的 UUID -->
      <el-input v-model="generatedUUID" readonly placeholder="生成的 UUID">
        <template #append>
          <el-button @click="generateUUID">生成</el-button>
          <el-button @click="copyToClipboard" :disabled="!generatedUUID"
            >复制</el-button
          >
        </template>
      </el-input>

      <!-- 错误信息 -->
      <div v-if="errorMessage" class="text-red">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export const toolMeta: ToolMeta = {
  id: 'uuid-generator',
  title: 'UUID 生成器',
  description: '生成各种版本的 UUID',
  group: '工具',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from 'uuid'

// UUID 类型选项
const uuidTypes = [
  { label: '版本 1 (时间戳)', value: 'v1' },
  { label: '版本 3 (MD5 哈希)', value: 'v3' },
  { label: '版本 4 (随机)', value: 'v4' },
  { label: '版本 5 (SHA-1 哈希)', value: 'v5' },
]

// 当前选择的 UUID 类型
const selectedType = ref('v4')

const removeSplit = ref(false)

// 生成的 UUID
const generatedUUID = ref('')

// 错误信息
const errorMessage = ref('')

// 命名空间（v3 和 v5 需要）
const namespace = ref('6ba7b810-9dad-11d1-80b4-00c04fd430c8') // 默认命名空间

// 名称（v3 和 v5 需要）
const name = ref('example.com') // 默认名称

// 生成 UUID 的函数
const generateUUID = () => {
  try {
    errorMessage.value = '' // 清空错误信息

    switch (selectedType.value) {
      case 'v1':
        generatedUUID.value = uuidv1()
        break
      case 'v3':
        if (!namespace.value || !name.value) {
          errorMessage.value = '命名空间和名称不能为空！'
          return
        }
        generatedUUID.value = uuidv3(name.value, namespace.value)
        break
      case 'v4':
        generatedUUID.value = uuidv4()
        break
      case 'v5':
        if (!namespace.value || !name.value) {
          errorMessage.value = '命名空间和名称不能为空！'
          return
        }
        generatedUUID.value = uuidv5(name.value, namespace.value)
        break
      default:
        generatedUUID.value = ''
        break
    }
    if (removeSplit.value) {
      generatedUUID.value = generatedUUID.value.replace(/-/g, '')
    }
  } catch (error) {
    errorMessage.value = '生成 UUID 失败，请检查输入参数。'
    console.error(error)
  }
}

// 复制到剪贴板的函数
const copyToClipboard = () => {
  if (generatedUUID.value) {
    writeClipboard(generatedUUID.value)
  }
}
</script>
