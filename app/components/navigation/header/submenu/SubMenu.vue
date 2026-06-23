<template>
  <div
    class="absolute top-full w-full bg-white text-grey-800 shadow-400 transition-all duration-500"
    :class="
      header.displaySubMenu && !header.scroll
        ? 'translate-y-0'
        : 'translate-y-[-150%]'
    "
  >
    <div class="hidden desktop:flex flex-col px-20 py-4"  @click="header.handleSubMenu()">
      <ul class="w-full bg-red grid grid-cols-4 gap-4">
        <li>
          <SubMenuList :sub-menu-item="menuItems.categories"/>
        </li>
        <li>
          <SubMenuList :sub-menu-item="menuItems.types"/>
        </li>
        <li>
          <SubMenuList :sub-menu-item="menuItems.difficulties"/>
        </li>
        <li>
          <SubMenuList :sub-menu-item="menuItems.seasons"/>
        </li>
      </ul>
      <div class="col-span-4 flex items-center justify-center">
        <SubMenuButtons/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import menuItems from '~/assets/data/headerLinks.json'
const header = useHeaderStore();
const subMenuRef = ref<HTMLElement | null>(null);

onMounted(() => {
  updateInert();
});

watch(
  () => [header.displaySubMenu, header.scroll],
  () => {
    updateInert(); // Met à jour inert quand l'état change
  },
);

function updateInert() {
  if (subMenuRef.value) {
    subMenuRef.value.inert = !(header.displaySubMenu && !header.scroll);
  }
}
</script>

<style lang="scss">
.hideSubMenu {
  transform: translateY(-150%);
}

.submenu-slide-fade-enter-active {
  @media screen and (min-width: 576px) {
    transition: all .5s ease;
  }

}
.submenu-slide-fade-leave-active {
  @media screen and (min-width: 576px) {
    transition: transform 700ms ease-out;
    transform:translateY(-100%);
  }
}
.submenu-slide-fade-enter, .submenu-slide-fade-leave-to {
  @media screen and (min-width: 576px) {
    transition: transform 700ms ease-out;
    transform:translateY(-100%);
  }
}
</style>
