<template>
  <article
    class="group relative flex w-full p-3 overflow-hidden desktop:p-0"
    :class="une ? 'h-fit' : ''"
    role="article"
    tabindex="0"
    :aria-labelledby="`card-title-${card?.id}`"
  >
    <div class="relative w-full">
      <div class="relative grid grid-cols-[160px_1fr_1fr_1fr]">
        <div class="col-span-1 flex flex-col">
          <div>
            <!-- IMAGE -->
            <NuxtImg
              v-if="card?.visual.url"
              :src="getUrlWithFormat(card.visual.url, imageFormat)"
              :alt="card.visual.alt"
              :preload="une || mobileUne"
              placeholder
              class="aspect-square h-auto object-cover object-top rounded w-40"
              width="160"
              height="160"
              format="webp"
              fit="cover"
              loading="lazy"
            />
            <img
              v-else
              class="aspect-square h-auto w-full object-cover rounded object-top"
              :src="placeholderImage"
              alt="image par défaut"
              typeof="foaf:Image"
              width="160"
              height="160"
            />
            <!-- DESKTOP DARK FILTER & img link -->
            <ElementLink
              :url="card?.alias"
              classes="absolute top-0 z-10 h-full transition-all duration-300 ease-out group-hover:opacity-0 block hover:cursor-pointer w-[160px] rounded"
              :obfuscated="false"
              :internal="true"
            >
            </ElementLink>
          </div>
        </div>
        <!-- CONTENT -->
        <div class="col-span-3 pl-6.5">
          <CardContent :card="card" :cardType="'CardHorizontal'" :une="une" :isObfuscated="false"/>
        </div>
      </div>
    </div>
    <span class="absolute bottom-0 hidden h-1 w-full max-w-0 opacity-0 transition-all duration-300 ease-out group-hover:max-w-full group-hover:opacity-100 desktop:block bg-primary"/>
  </article>
</template>

<script setup lang="ts">
  const props = defineProps({
    card: Object,
    une: Boolean,
    mobileUne: Boolean,
    toPreload: Boolean
  })

  const { isMobile } = useDevice()

  const imageFormat = computed(() => {
    return isMobile
      ? '100x100'
      : '225x225'
  })

  const placeholderImage = ref<string>('')

  onMounted(async () => {
    const placeholderImageModule = await import('~/assets/images/place-holder_podcast-300x330.png');
    placeholderImage.value = (placeholderImageModule.default || placeholderImageModule) as string;
  });
</script>