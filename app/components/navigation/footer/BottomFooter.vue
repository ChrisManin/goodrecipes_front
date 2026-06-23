<template>
  <div class="flex flex-col desktop:flex-row desktop:justify-between mt-4">
    <div class="relative h-fit w-full flex justify-center">

    </div>
    <div class="flex flex-col desktop:items-end items-center justify-center mt-12 desktop:mt-0">
      <img src="~/assets/images/gr_light_logo.png" alt="Logo Good Recipes" height="123" width="123" class="mb-4" loading="lazy">
      <span class="italic text-center desktop:text-start text-sm desktop:w-max">v{{ config.clientVersion }} ({{ config.clientBuild }}) - ©2026 Good Recipes. Tous droits réservés.
        Images non libres de droits.</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig().public
const route = useRoute()
function isObfuscated() {
  return route.path != "/";
}
</script>