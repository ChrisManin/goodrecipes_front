<template>
  <section v-if="hasBlocks" class="page-container-y">
    <DrupalBlocks :blocks="homepage" region="homepage" id="main-content"/>
  </section>
</template>

<script setup lang="ts">

const { $api } = useNuxtApp()

const { data: homepage, status, error } = await $api.blocks.getByRegion<Record<string, unknown>>('homepage')

const hasBlocks = computed(() => !!homepage.value && Object.keys(homepage.value).length > 0)
</script>