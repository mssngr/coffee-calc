<template>
  <div
    :class="{
      [className]: className,
      base: true,
    }"
    :style="[baseStyles, interactiveStyles, overrideStyles]"
  >
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'
import Utilities from './lib/utils'

Vue.use(Utilities)

export default {
  name: 'md-card-media',
  props: [
    'className',
    'overrideStyles',
    'aspectRatio',
    'cardID',
  ],
  computed: {
    baseStyles() {
      const {
        fontFamily,
        transitionCurves,
        transitionDurations,
        aspectRatio,
      } = this
      console.log(document.getElementById(this.cardID), this.cardID)
      const widthOfParent = document.getElementById(this.cardID).clientWidth
      const height = `${widthOfParent / (16 / 9)}px`
      let styles = {
        fontFamily,
        height,
        transitionTimingFunction: transitionCurves.standard,
        transitionDuration: transitionDurations.standard,
      }
      if (aspectRatio === '1:1' || aspectRatio === 'square') {
        styles = {
          ...styles,
          height: `${widthOfParent}px`,
        }
      }
      return styles
    },
    interactiveStyles() {
      return {}
    },
  },
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

.base {
  width: 100%;
  overflow: hidden;
}
</style>
