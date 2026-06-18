<template>
  <div class="hidden desktop:flex items-center justify-between text-light py-2 pl-2"
        :class="header.slimHeader ? 'max-h-14':'max-h-max'">
    <div class="flex">
      <nuxt-link to="/" class="flex items-center pr-2" aria-label="Retour à la page d'accueil">
        <img src="~/assets/images/gr_dark_logo.png"
              alt="Logo Good recipes"
              :height="header.slimHeader ? '65px' : '100px'"
              :width="header.slimHeader ? '65px' : '100px'"
              class="hidden desktop:block"
      </nuxt-link>
    </div>

    <nav>
      <ul class="flex items-center justify-between">
        <li class="header-link desktop:mr-6 relative group" @click="header.handleSubMenu()">
          <svg-icon name="list-light" class="link-svg" />
          <button class="menu-title" aria-label="Ouvrir le menu">Menu</button>
          <span
            class="absolute bottom-0 hidden h-px w-full max-w-0 bg-light opacity-0 transition-all duration-500 ease-out group-hover:max-w-full group-hover:opacity-100 desktop:block"
          />
        </li>
        <li class="header-link desktop:mr-6 relative group" @click="header.closeSubMenu">
          <nuxt-link to="/au-menu-ce-soir" class="flex items-center" aria-label="Voir les suggestions pour la soirée">
            <svg-icon name="cooking-pot-light" class="link-svg" />
            <span class="menu-title">Au menu ce soir</span>
          </nuxt-link>
          <span
            class="absolute bottom-0 hidden h-px w-full max-w-0 bg-light opacity-0 transition-all duration-500 ease-out group-hover:max-w-full group-hover:opacity-100 desktop:block"
          />
        </li>
        <li class="header-link relative group" @click="header.closeSubMenu">
          <nuxt-link to="/recettes-festives" class="flex items-center">
            <svg-icon name="confetti-light" class="link-svg" />
            <span class="menu-title">Recettes festives</span>
          </nuxt-link>
          <span
            class="absolute bottom-0 hidden h-px w-full max-w-0 bg-light opacity-0 transition-all duration-500 ease-out group-hover:max-w-full group-hover:opacity-100 desktop:block"
          />
        </li>
      </ul>
    </nav>
    <button 
      :class="['flex', 'items-center', 'h-full', 'justify-between', 'py-1', 'px1', 'desktop:pl-4', 'cursor-pointer',
              'rounded-l-full', 'desktop:h-10', 'max-w-[14%]', 'hover:border-px', 'border-px', 'hover:bg-dark-bg', 
              'hover:border-primary', 'group', 'bg-primary', 'border-primary', 'hover:border-primary', getButtonClass()]"
      type="button" 
    >
      
      <svg-icon name="user-light" class="w-4 h-4 mr-1 fill-white"/>
      <span>MON COMPTE</span>
        
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useHeaderStore } from '@/stores/header'

  const header = useHeaderStore()

  const getButtonClass = () => {
    let classToReturn = ""

    if(header.slimHeader) {
      classToReturn += "p-2"
    } else {
      classToReturn += "p-4"
    }

    // if(auth.isAuthenticated && props.isOnMonCompte) {
    //   classToReturn += " bg-white text-grey-950"
    // }
    // else if(auth.isAuthenticated) {
    //   classToReturn += " bg-grey-950 text-white"
    // } 
    // else {
      classToReturn += " bg-dark-bg text-light"
    // }
    
    return classToReturn
  }
</script>

<style>
  @reference "../../../assets/css/main.css";

  .menu-title{
    @apply uppercase tracking-widest text-light ml-2.5 cursor-pointer
  }
  .header-link {
    @apply flex items-center justify-between cursor-pointer
  }
  .link-underline {
    @apply border-b border-white hover:border-light
  }
  .link-svg {
    @apply w-4 h-4 fill-light
  }
  .link-svg-white {
    @apply w-4 h-4 fill-white mr-2
  }
</style>