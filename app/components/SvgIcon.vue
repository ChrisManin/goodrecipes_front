<template>
  <span v-html="renderedSvg" style="display: contents" />
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = defineProps<{ name: string }>()
const attrs = useAttrs()

const modules = import.meta.glob('../assets/sprite/svg/*.svg', { as: 'raw', eager: true }) as Record<string, string>

const renderedSvg = computed(() => {
  const key = Object.keys(modules).find(k => k.endsWith(`/${props.name}.svg`))
  if (!key) return ''
  let svg = modules[key] as string
  const cls = attrs.class as string | undefined
  if (cls) svg = svg.replace('<svg ', `<svg class="${cls}" `)
  return svg
})
</script>
