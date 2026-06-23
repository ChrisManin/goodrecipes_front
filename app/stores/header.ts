import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    displayLeftMenu: false,
    displaySubMenu: false, // menu
    keyboardFocusableMenuItems: false,
    scroll: false,
    slimHeader: false,
  }),
  actions: {
    handleSubMenu() {
      if (!this.displaySubMenu) {
        this.displaySubMenu = true
        this.keyboardFocusableMenuItems = true
      } else {
        this.displaySubMenu = false
        this.keyboardFocusableMenuItems = false
      }
    },
    handleLeftMenu() {
      if (!this.displayLeftMenu) {
        this.displayLeftMenu = true
      } else {
        this.displayLeftMenu = false
      }
    },
    closeSubMenu() {
      this.displaySubMenu = false
      this.keyboardFocusableMenuItems = false
    },
    setSlimHeader(val:boolean) {
      this.slimHeader = val
    },
    setScroll(val:boolean) {
      this.scroll = val
    },
  }
})