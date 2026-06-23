<template>
  <div class="text-grey-950 col-span-1">
    <div class="submenu-title">
      <span>{{ subMenuItem.title }}</span>
    </div>
    <ul v-if="focusFirstElement">
      <ElementLink :url="subMenuItem.items[0].url" 
        :obfuscated="subMenuItem.items[0].force_obfuscate ?? (isObfuscated && subMenuItem.items[0].obfuscate)" 
        :internal="subMenuItem.items[0].external ? false : true"
        :target="subMenuItem.items[0].external ? '_blank' : '_self'"
        :keyboardFocusableMenuItem="headerStore.keyboardFocusableMenuItems ? true : false"
        :forceFocus="true"
      >
        <li class="subMenu-link">
          {{ subMenuItem.items[0].title }}
        </li>
      </ElementLink>

      <ElementLink :url="item.url" 
        v-for="item in subMenuItem.items.slice(1)" :key="item.title"  
        :obfuscated="item.force_obfuscate ?? (isObfuscated && item.obfuscate)" 
        :internal="item.external ? false : true"
        :target="item.external ? '_blank' : '_self'"
        :keyboardFocusableMenuItem="headerStore.keyboardFocusableMenuItems ? true : false"
      >
        <li class="subMenu-link">
          {{ item.title }}
        </li>
      </ElementLink>
    </ul>

    <ul v-else>
      <ElementLink :url="item.url" 
        v-for="item in subMenuItem.items" :key="item.title"  
        :obfuscated="item.force_obfuscate ?? (isObfuscated && item.obfuscate)" 
        :internal="item.external ? false : true"
        :target="item.external ? '_blank' : '_self'"
        :keyboardFocusableMenuItem="headerStore.keyboardFocusableMenuItems ? true : false"
      >
        <li class="subMenu-link">
          {{ item.title }}
        </li>
      </ElementLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  subMenuItem: any
  focusFirstElement?: boolean
}

const props = withDefaults(defineProps<Props>(), {

})

const headerStore = useHeaderStore()

const isObfuscated = computed(() => {
  return useRoute().path != "/";
})
</script>