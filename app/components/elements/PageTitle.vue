<template>
  <div :class="no_margin ? 'mt-0' : 'mt-14'">
    <div class="flex font-brandon font-bold text-dark-bg h-fit items-middle"
          :class="(link_label ? 'desktop:justify-between' : '') + (!isTdb ? 'uppercase' : '')"
    >
      <h1 class="mb-2 py-1 pl-0"
          :class="[setClass, { 'text-5xl': isTdb && !isMobile , 'text-4xl': !isTdb || isTdb && isMobile }]">
        {{ text }} {{ currentPage ? currentPage : '' }} {{ error ? currentPage : '' }}
      </h1>
      <nuxt-link 
        class="hidden desktop:block text-sm tex-text-right underline underline-offset-4 cursor-pointer"
        :to="link_url"
        v-if="link_url">
          {{ link_label }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  link_label: String,
  link_url: String,
  text_start: Boolean,
  text_center: Boolean,
  no_margin: Boolean,
  isTdb: Boolean,
  error: Boolean
})

const route = useRoute()
const { isMobile } = useDevice()

const currentPage = computed(() => {
  return route.query.page ? " - page " + route.query.page : ""
})

function setClass() {
  if (props.text_start) {
    return 'text-start'
  }
  if (props.text_center) {
    return 'text-center'
  }
  if (props.link_label) {
    return 'text-center'
  }
}
</script>