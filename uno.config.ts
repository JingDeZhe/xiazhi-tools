import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerVariantGroup,
  transformerCompileClass,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {},
  },
  safelist: getSafeList(),
})

function getSafeList() {
  return []
}
