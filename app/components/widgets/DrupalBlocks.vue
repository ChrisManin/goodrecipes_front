<template>
  <div>
    <div v-for="(data, section) in localBlocks" :key="section" class="block-content">

      <section
        v-if="isSuggestionsSection(section)"
        role="region"
        aria-labelledby="section-suggestions"
        class="home-page-block-container overflow-hidden px-4 desktop:px-0"
      >
        <ALaUne :items="(data as Recipe[])" :section="'Nos suggestions'"/>
      </section>

      <section
        v-else-if="isSeasonalRecipesSection(section)"
        role="region"
        aria-labelledby="section-seasonal-recipes"
      >
        <h2 id="section-seasonal-recipes">Recettes de saison</h2>
        <!-- <SectionSeasonalRecipes :recipes="(data as RecipeCard[])" /> -->
      </section>

      <section
        v-else-if="isCategoriesSection(section)"
        role="region"
        aria-labelledby="section-categories"
      >
        <h2 id="section-categories">Catégories</h2>
        <!-- <SectionCategories :categories="(data as Record<string, Category>)" /> -->
      </section>

      <section
        v-else-if="isThermomixRecipesSection(section)"
        role="region"
        aria-labelledby="section-thermomix-recipes"
      >
        <h2 id="section-thermomix-recipes">Recettes Thermomix</h2>
        <!-- <SectionThermomixRecipes :recipes="(data as RecipeCard[])" /> -->
      </section>

      <section
        v-else-if="isWeeklyMenuSection(section)"
        role="region"
        aria-labelledby="section-weekly-menu"
      >
        <h2 id="section-weekly-menu">Menu de la semaine</h2>
        <!-- <SectionWeeklyMenu :menu="data" /> -->
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { RecipeCard } from '~/types/recipe'
import type { Category } from '~/types/taxonomy'

// const SectionSeasonalRecipes = defineAsyncComponent(() => import('~/components/sections/SectionSeasonalRecipes.vue'))
// const SectionCategories = defineAsyncComponent(() => import('~/components/sections/SectionCategories.vue'))
// const SectionThermomixRecipes = defineAsyncComponent(() => import('~/components/sections/SectionThermomixRecipes.vue'))
// const SectionWeeklyMenu = defineAsyncComponent(() => import('~/components/sections/SectionWeeklyMenu.vue'))

const props = defineProps<{
  blocks: Record<string, unknown>
  region?: string
}>()

const localBlocks = ref({ ...props.blocks })

onBeforeUnmount(() => {
  localBlocks.value = {}
})

function isSuggestionsSection(section: string): boolean {
  return section === 'suggestions'
}

function isSeasonalRecipesSection(section: string): boolean {
  return section === 'seasonal_recipes'
}

function isCategoriesSection(section: string): boolean {
  return section === 'categories'
}

function isThermomixRecipesSection(section: string): boolean {
  return section === 'thermomix_recipes'
}

function isWeeklyMenuSection(section: string): boolean {
  return section === 'weekly_menu'
}
</script>
