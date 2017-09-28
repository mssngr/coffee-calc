<template>
  <div
    :class="{
      [className]: className,
      'md-card-base': true,
      defaultColor: !color,
      defaultBackgroundColor: !backgroundColor,
    }"
    :style="[baseStyles, interactiveStyles, overrideStyles]"
  >
    <slot name="header" />
    <slot name="media" />
    <slot name="content" />
    <slot name="footer" />
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
    'overrideStyles',
    'color',
    'backgroundColor',
  ],
  computed: {
    baseStyles() {
      const {
        fontFamily,
        elevation,
        transitionCurves,
        transitionDurations,
        color,
        backgroundColor,
      } = this
      let styles = {
        ...elevation[2],
        fontFamily,
        transitionTimingFunction: transitionCurves.standard,
        transitionDuration: transitionDurations.standard,
      }
      if (color) {
        styles = {
          ...styles,
          color,
        }
      }
      if (backgroundColor) {
        styles = {
          ...styles,
          backgroundColor,
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
.md-card-base {
  border-radius: 2px;
  margin: 8px;
}

.defaultColor {
  color: black;
}

.defaultBackgroundColor {
  background-color: white;
}
</style>
