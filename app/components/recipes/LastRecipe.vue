<template>
  <article class="group flex flex-col text-grey-950">
    <div class="relative max-h-51.25 desktop:max-h-107">
      <ElementLink
        :url="item?.alias || item?.value?.alias"
        classes="text-grey-950 hover:text-grey-600 text-sm relative z-0 justify-self-start rounded"
        :obfuscated="false"
        :internal="true"
      >
        <NuxtImg
          v-if="hasVisualImage"
          :preload="preloadImage"
          :fetchpriority="preloadImage ? 'high' : 'auto'"
          :loading="preloadImage ? undefined : 'lazy'"
          format="webp"
          class="aspect-video w-full rounded"
          width="800"
          height="450"
          typeof="foaf:Image"
          :placeholder="[22, 12, 1]"
          :data-src="
            getUrlWithFormat(
              item?.visual?.url ||
                item?.visual?.visual ||
                item?.value?.visual?.url,
              imageFormat,
            )
          "
          :src="
            getUrlWithFormat(
              item?.visual?.url ||
                item?.visual?.visual ||
                item?.value?.visual?.url,
              imageFormat,
            )
          "
          :alt="
            item?.value?.visual.alt ||
            item?.visual?.alt ||
            (item?.visual?.visual_alt ? item?.visual.visual_alt : '')
          "
        />

        <img
          v-else
          :fetchpriority="preloadImage ? 'high' : 'auto'"
          class="w-full object-none rounded tablet:object-cover"
          src="~/assets/images/place-holder_article-930x500.png"
          :alt="`image par défaut`"
          typeof="foaf:Image"
          width="800"
          height="450"
        />

        <span
          class="absolute bottom-0 z-10 hidden h-full w-full bg-dark-bg opacity-[.15] transition-all duration-300 ease-out rounded group-hover:opacity-0 desktop:block"
        />
      </ElementLink>
    </div>

    <div class="relative flex flex-col mt-1">
      <div class="flex flex-col pb-4">
        <div class="my-2 flex items-center justify-between text-xs">
          <span class="pt-0 desktop:pt-2" v-if="item?.created">{{
            item.created
          }}</span>
        </div>

        <ElementLink
          v-if="item?.alias"
          :url="item.alias"
          classes="block text-grey-950 text-sm relative z-0 justify-self-start mb-2 flex flex-col"
          :obfuscated="false"
          :internal="true"
        >
          <div>
            <span
              class="font-brandon font-bold text-2xl"
              :title="item?.title"
              >{{ item.title }}</span
            >
            <div
              v-if="item.description"
              class="line-clamp-5 hidden desktop:block bg-none"
              v-html="item.description"
            />
          </div>
        </ElementLink>
      </div>
      <span
        class="absolute bottom-0 hidden h-1 w-full max-w-0 opacity-0 transition-all duration-300 ease-out group-hover:max-w-full group-hover:opacity-100 desktop:block bg-primary"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  item: Object,
  preloadImage: Boolean,
});

const { isMobile } = useDevice();

const imageFormat = computed(() => {
  return isMobile ? "350x335" : "960x375";
});

const hasVisualImage = computed(
  () =>
    props.item?.value?.visual ||
    (props.item?.visual && props.item?.visual?.url?.length > 0) ||
    (props.item?.visual?.visual && props.item?.value?.visual?.length > 0),
);
</script>
