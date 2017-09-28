<template>
  <div
    :class="{
      [className]: className,
      'md-card-media-base': true,
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
  ],
  computed: {
    baseStyles() {
      const {
        fontFamily,
        transitionCurves,
        transitionDurations,
        aspectRatio,
      } = this
      const widthOfParent = this.$parent.$el.clientWidth
      let styles = {
        fontFamily,
        transitionTimingFunction: transitionCurves.standard,
        transitionDuration: transitionDurations.standard,
      }
      if (aspectRatio === '16:9') {
        styles = {
          ...styles,
          height: `${widthOfParent / (16 / 9)}px`,
        }
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

.md-card-media-base {
  width: 100%;
  overflow: hidden;
}
</style>
