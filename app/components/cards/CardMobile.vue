<template>
  <article
    class="group relative flex flex-col w-full py-4 overflow-visible"
    :class="une ? 'h-fit' : ''"
  >
    <div class="relative grid grid-cols-[72px_1fr_36px] grid-rows-[72px_1fr] gap-2 w-full">
      <!-- IMAGE -->
      <div class="col-span-1 row-start-1">
        <ElementLink
          :url="card?.alias"
          classes="block text-grey-950 hover:text-grey-600 text-sm relative"
          :obfuscated="false"
          :internal="true"
        >
          <NuxtImg 
            class="h-auto object-cover object-top rounded aspect-square"
            v-if="card.visual"
            :src="getUrlWithFormat(card.visual.url, '100x100')"
            :alt="card.visual.alt"
            placeholder
            :width="'72'"
            :height="'72'"
            format="webp"
            fit="cover"
            loading="lazy"
            :preload="toPreload"
          />
        </ElementLink>
      </div>

      <div class="flex w-full flex-col col-start-2 col-span-2 row-start-1 ml-2">
        <div class="flex w-full">
          <div
            class="text-xs text-black min-w-fit mr-2"
            v-if="!isInSectionFolder"
          >
            {{ card.created }}
          </div>
        </div>

        <!-- TITRE -->
        <ElementLink
          :url="card?.alias"
          classes="block text-grey-950 hover:text-grey-600 text-base relative z-0 justify-self-start mt-1"
          :obfuscated="false"
          :internal="true"
        >
          <h3 class="line-clamp-2 wrap-break-words font-semibold text-start text-grey-950">
            {{ card.title }}
          </h3>
        </ElementLink>
      </div> 
    </div>
  </article>
</template>

<script setup lang="ts">
  const props = defineProps<{
    card: any,
    une?: boolean,
    type?: string,
    toPreload?: boolean,
    isInSectionFolder?: boolean
  }>()

  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
</script>
