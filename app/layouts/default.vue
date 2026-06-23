<template>
  <div class="layout flex flex-col justify-center">
    <Header/>
    <main class="page-container-y mt-16.25 desktop:mt-33.75">
      <slot/>
    </main>

    <Footer/>
  </div>
</template>

<script setup lang="ts">
</script>