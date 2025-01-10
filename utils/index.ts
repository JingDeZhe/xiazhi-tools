export const writeClipboard = (arg: string, msg = '已复制到剪贴板！') => {
  navigator.clipboard.writeText(arg).then(() => {
    ElMessage.success(msg)
  })
}
