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
      <ul>
        <li>

        </li>
      </ul>

      <!-- MOBILE -->
      <ul>
        <li>

        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RecipeCard } from '~/types/recipe'
const { isMobile } = useDevice()

const props = defineProps<{ items: Recipe[], section: String }>()

const lastItem = computed(() => {
  return props.items[0]
})

const otherItems = computed(() => {
  return props.items.slice(1, props.items.length)
})
</script>