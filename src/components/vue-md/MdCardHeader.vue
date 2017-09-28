<template>
  <div>
    <slot
      :class="{
        'md-card-header-base': true,
        [className]: className,
      }"
      :style="[baseStyles, interactiveStyles, overrideStyles]"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import Utilities from './lib/utils'

Vue.use(Utilities)

export default {
  name: 'md-card-header',
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
.md-card-header-base {
  width: 100%;
  height: 100%;
  margin: -16px;
  padding: 16px;
  overflow: hidden;
}
</style>
