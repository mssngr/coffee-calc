<template>
  <button
    :class="{
      [className]: className,
      base: true,
      default: !dense,
      dense: dense,
      flat: !raised,
      raised: raised,
      raisedActive: raised && active,
      active: !raised && active,
      disabled: disabled,
    }"
    :id="{[id]: id}"
    :style="[baseStyles, activeStyles, overrideStyles]"
    @touchstart="startRipple"
    @mousedown="startRipple"
    @touchend="endRipple"
    @click="endRipple"
  >
    {{label}}
  </button>
</template>

<script>
import Vue from 'vue'
import Utilities from './lib/utils'
import Ripple from './lib/ripple'

Vue.use(Utilities)
Vue.use(Ripple)

export default {
  name: 'md-button',
  props: [
    'className',
    'id',
    'active',
    'raised',
    'dense',
    'label',
    'disabled',
    'primary',
    'secondary',
    'color',
    'overrideStyles',
  ],
  computed: {
    baseStyles() {
      const {
        raised,
        primary,
        secondary,
        defaultColor,
        fontFamily,
        elevation,
        clickedElement,
        transitionCurves,
        transitionDurations,
      } = this

      let styles = {
        fontFamily,
        color: defaultColor,
        transitionTimingFunction: transitionCurves.sharp,
        transitionDuration: transitionDurations.standard,
      }
      if (raised) {
        styles = {
          ...styles,
          ...elevation[2],
        }
        if (primary || secondary) {
          styles = {
            ...styles,
            backgroundColor: defaultColor,
            color: 'white',
          }
        }
        if (clickedElement) {
          styles = {
            ...styles,
            ...elevation[8],
            transform: 'scale(1.05)',
            webkitTransform: 'scale(1.05)',
          }
        }
      }
      return styles
    },
    activeStyles() {
      if (this.active) {
        return {backgroundColor: this.defaultColor12Percent}
      }
      return {}
    },
  },
}
</script>

<style scoped>
.base {
  display: inline-block;
  border: none;
  border-radius: 2px;
  outline: none;
  margin: 8px;
  box-sizing: border-box;
  background: transparent;
  overflow: hidden;
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-perspective: 50px;
}

.base:focus {
  outline: none;
}

.base:active {
  outline: none;
}

.base::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.default {
  min-width: 64px;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
}

.dense {
  min-width: 64px;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
}

.flat {
  padding: 0 8px;
}

.raised {
  padding: 0 16px;
}

.disabled {
  color: rgba(0, 0, 0, 0.26);
  cursor: default;
  pointer-events: none;
}
</style>
