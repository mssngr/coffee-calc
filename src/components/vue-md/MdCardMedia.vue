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
  ],
  computed: {
    baseStyles() {
      const {
        fontFamily,
        transitionCurves,
        transitionDurations,
      } = this
      const styles = {
        fontFamily,
        transitionTimingFunction: transitionCurves.standard,
        transitionDuration: transitionDurations.standard,
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
  width: calc(100% + 32px);
  height: 100%;
  margin: 0 -16px;
  overflow: hidden;
}
</style>
