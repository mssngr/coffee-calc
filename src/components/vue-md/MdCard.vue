<template>
  <div
    :class="{
      [className]: className,
      base: true,
    }"
    :id="{[id]: id}"
    :style="[baseStyles, interactiveStyles, overrideStyles]"
  >
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
import Utilities from './lib/utils'

Vue.use(Utilities)

export default {
  name: 'md-card',
  props: [
    'className',
    'id',
    'overrideStyles',
  ],
  computed: {
    baseStyles() {
      const {
        defaultColor,
        fontFamily,
        elevation,
        transitionCurves,
        transitionDurations,
      } = this
      return {
        ...elevation[2],
        fontFamily,
        color: defaultColor,
        transitionTimingFunction: transitionCurves.sharp,
        transitionDuration: transitionDurations.standard,
      }
    },
    interactiveStyles() {
      return {}
    },
  },
}
</script>

<style scoped>
.base {
  background: white;
  border-radius: 2px;
}
</style>
