<template>
  <div class="w-full">
    <PageTitle :text="section" class="mt-1.5"/>
    <div class="flex flex-wrap">
      <div class="mb-2 block w-full desktop:w-[62%] desktop:pr-4">
        <div v-if="lastItem !== null"
          class="h-full w-full desktop:pb-8"
        >
          <LastRecipe :item="lastItem"/>
        </div>
      </div>

      <!-- DESKTOP -->
      <ul class="my-list hidden flex-col text-grey-950 desktop:flex desktop:w-[38%]">
        <li 
          v-for="item in otherItems"
          :key="item.id"
          class="mb-4 flex flex-col"
        >
          <CardHorizontal :card="item" :une="true"/>
        </li>
      </ul>

      <!-- MOBILE -->
      <ul class="flex flex-col text-grey-950 desktop:hidden">
        <li v-for="item in otherItems" class="desktop:py-4 border-b border-grey-200" :key="item.id">
          <CardMobile 
            :card="item" 
            :toPreload="isMobile"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RecipeCard } from '~/types/recipe'
const { isMobile } = useDevice()

const props = defineProps<{ items: RecipeCard[], section: String }>()
console.log(props.items)
const lastItem = computed(() => {
  return props.items[0]
})

const otherItems = computed(() => {
  return props.items.slice(1, props.items.length)
})
</script>