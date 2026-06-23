<template>
  <footer
    role="contentinfo"
    class="mt-8 flex w-full flex-col text-grey-950 desktop:px-24"
  >
    <div class="flex flex-col pb-20 desktop:pb-0 px-2">
      <hr aria-hidden="true" class="h-px border-t border-t-grey-400 my-8 -mr-2 -ml-2 desktop:-mr-24 desktop:-ml-24"/>
      <section>
        <LiensFooter class="px-2"/>
      </section>

      <BottomFooter aria-hidden="true"/>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { isMobileOrTablet } = useDevice()
</script>