<template>
  <header class="fixed top-0 left-0 right-0 flex flex-col w-full z-40">
    <transition name="header-slide-fade">
      <div
        v-show="!header.scroll || isMobileOrTablet"
        v-click-outside="header.closeSubMenu"
        class="relative z-10 bg-dark-bg"
      >
        <MainMenu/>
      </div>
    </transition>
    <SubMenu :display="!header.scroll && header.displaySubMenu"/>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import SubMenu from "./submenu/SubMenu.vue";

const { isMobile, isMobileOrTablet } = useDevice();

const header = useHeaderStore();

onMounted(() => {
  nextTick(() => {
    // hide header on scroll
    let lastScrollY = 0;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        header.setScroll(true);
      } else {
        header.setScroll(false);
      }
      lastScrollY = scrollY;

      // scale the header's height according to position on the page
      scrollY < 150 ? header.setSlimHeader(false) : header.setSlimHeader(true);
    });
  });
});
</script>

<style lang="scss">
.header-slide-fade-enter-active {
  @media screen and (min-width: 576px) {
    transition: all 0.3s ease;
  }
}
.header-slide-fade-leave-active {
  @media screen and (min-width: 576px) {
    transition: transform 700ms ease-out;
    transform: translateY(-200%);
  }
}
.header-slide-fade-enter,
.header-slide-fade-leave-to {
  @media screen and (min-width: 576px) {
    transition: transform 700ms ease-out;
    transform: translateY(-200%);
  }
}

.donationButton-slide-fade-enter-active {
  @media screen and (min-width: 576px) {
    transition: all 0.3s ease;
  }
}
.donationButton-slide-fade-leave-active {
  @media screen and (min-width: 576px) {
    transition: transform 700ms ease-out;
    transform: translateX(200%);
  }
}
.donationButton-slide-fade-enter,
.donationButton-slide-fade-leave-to {
  @media screen and (min-width: 576px) {
    transition: transform 700ms ease-out;
    transform: translateX(200%);
  }
}
</style>
