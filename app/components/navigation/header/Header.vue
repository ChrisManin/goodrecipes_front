<template>
  <header class="fixed top-0 left-0 right-0 flex flex-col w-full z-40">
    <!-- <transition name="header-slide-fade">
      <div v-show="!header.scroll || isMobileOrTablet" v-click-outside="header.closeSubMenu" class="relative z-10 bg-dark-bg desktop:border-b desktop:border-b-grey-400 here"> -->
        <p>Menu Principal</p>
      <!-- </div> -->
    <!-- </transition> -->
  </header>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";

  const { isMobile, isMobileOrTablet } = useDevice()

  
</script>