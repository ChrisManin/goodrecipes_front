<template>
  <div class="flex w-full flex-col desktop:justify-start desktop:mt-2 desktop:pl-0">
    <div class="flex w-full flex-col">

    </div>
    <div class="flex w-full flex-row justify-between desktop:justify-normal">
      <div class="flex 'flex-row' w-full desktop:item-center">
        <div
          class="text-xs text-black min-w-fit mr-2"
          v-if="!isInSectionFolder"
        >
          {{ card?.created }}
        </div>

        <div v-else class="h-4"/>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center justify-between desktop:mt-1">
    <div class="flex flex-col items-start w-full">
      <ElementLink
        :url="card?.alias"
        classes="block text-grey-950 hover:text-grey-600 text-base relative z-0 justify-self-start"
          :class="cardType === 'CardVertical' ? 'h-12' : ''"
          :obfuscated="isObfuscated"
          :internal="true"
          tabindex="0"
          :aria-label="`Consulter le contenu : '${card?.title}'`"
      >
        <h3
          class="line-clamp-2 wrap-break-words font-semibold text-start text-grey-950"
          :title="card?.title"
        >
          {{ card?.title }}
        </h3>
      </ElementLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  card: Object,
  une: Boolean,
  cardType: String,
  isObfuscated: Boolean,
  serie_section: Boolean,
  type: String,
  isInSectionFolder: Boolean
})
</script>