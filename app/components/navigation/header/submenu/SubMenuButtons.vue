<template>
  <div class="flex items-center justify-between" >
    <nuxt-link to="/recettes-rapides" 
      class="flex items-center submenu-button"
      :tabindex="headerStore.keyboardFocusableMenuItems ? 0 : -1"
    >
      <svg-icon name="speedometer-light" class="submenu-button-svg"/>
      <span class="submenu-button-title text-primary">Recettes rapides</span>
    </nuxt-link>

    <nuxt-link to="/top-podcasts" 
      class="flex items-center submenu-button"
      :tabindex="headerStore.keyboardFocusableMenuItems ? 0 : -1"
    >
      <svg-icon name="fork-knife-light" class="submenu-button-svg"/>
      <span class="submenu-button-title text-primary">Menus</span>
    </nuxt-link>

    <nuxt-link to="/recettes-festives"
      class="flex items-center submenu-button"
      :tabindex="headerStore.keyboardFocusableMenuItems ? 0 : -1"
    >
      <svg-icon name="cheers-light" class="submenu-button-svg"/>
      <span class="submenu-button-title text-primary">Festif</span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const headerStore = useHeaderStore()


</script>

<style>
  @reference "../../../../assets/css/main.css";

  .submenu-button {
    @apply rounded-full border border-primary cursor-pointer m-1 py-2 px-4 desktop:px-2 hover:shadow-primary hover:shadow-sm w-fit text-sm
  }
  .submenu-button-highlight {
    /* @apply rounded-full bg-orange-300 hover:bg-yellow-100 text-grey-800 m-1 py-2 px-4 desktop:px-2 w-fit text-sm */
  }
  .submenu-button-svg {
    @apply w-6 h-6 fill-primary mr-2
  }
  .submenu-button-highlight-svg {
    @apply w-6 h-6 fill-grey-800
  }

  .submenu-button-title {
    @apply uppercase font-semibold tracking-widest
  }
</style>