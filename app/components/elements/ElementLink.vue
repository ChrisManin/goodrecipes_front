<template>
  <span>
    <nuxt-link v-if="!obfuscated && internal" :class="classes" :to="url" :target="target" :tabindex="keyboardFocusableMenuItem ? 0 : -1" id="forceFocus">
      <slot/>
    </nuxt-link>
    <a v-else-if="!obfuscated && !internal" :class="classes" :href="url" :target="target" :tabindex="keyboardFocusableMenuItem ? 0 : -1" id="forceFocus">
      <slot/>
    </a>
    <span v-else-if="obfuscated" :class="classes" class="urlencode hover:cursor-pointer" 
      @click="openLink(url, target, internal)">
      <slot/>
    </span>
  </span>
</template>

<script setup lang="ts">
export interface Props {
  classes?: string,
  url?: string,
  target?: string,
  obfuscated?: boolean,
  internal?: boolean,
  keyboardFocusableMenuItem?: boolean,
  forceFocus?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  classes: '',
  url: '',
  target: '_self',
  obfuscated: false,
  internal: false
})

function openLink(url: string, target: string, internal: boolean) {
  if (target == '_blank') {
    var newWindow = window.open(url, '_blank');
    newWindow?.focus();
  } else if (!internal) {
    document.location.href = url;
  }
  else {
    useRouter().push(url);
  }
}

const header = useHeaderStore();

watch(
  () => [props.forceFocus, header.displaySubMenu],
  ([newForceFocus, newDisplaySubMenu]) => {
    if (newForceFocus && newDisplaySubMenu) {
      nextTick(() => {
        const element = document.getElementById("forceFocus");
        if (element) {
          element.focus();
        }
      });
    }
  }
);
</script>