<template>
  <button
    :class="{
      [className]: className,
      base: true,
      default: !dense,
      dense: dense,
      flat: !raised,
      raised: raised,
      disabled: disabled && !inverted,
      disabledInverted: disabled && inverted,
    }"
    :id="{[id]: id}"
    :style="[baseStyles, interactiveStyles, overrideStyles]"
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
    'focused',
    'raised',
    'dense',
    'label',
    'disabled',
    'primary',
    'secondary',
    'color',
    'inverted',
    'overrideStyles',
  ],
  computed: {
    baseStyles() {
      const {
        raised,
        inverted,
        invertedTextColor,
        defaultColor,
        fontFamily,
        elevation,
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
      }
      if (inverted) {
        styles = {
          ...styles,
          backgroundColor: defaultColor,
          color: invertedTextColor,
        }
      }
      return styles
    },
    interactiveStyles() {
      const {
        pressedElement,
        elevation,
        focused,
        disabled,
        inverted,
        raised,
        defaultColorFocused,
        defaultColor12Percent,
        defaultColor40Percent,
        defaultColorDarkened12Percent,
      } = this

      let styles = {}
      if (pressedElement) {
        styles = {
          ...styles,
          backgroundColor: defaultColor40Percent,
          transform: 'scale(1.012)',
          webkitTransform: 'scale(1.012)',
        }
        if (inverted) {
          styles = {
            ...styles,
            backgroundColor: defaultColorDarkened12Percent,
          }
        }
        if (raised) {
          styles = {
            ...styles,
            ...elevation[8],
          }
        }
      }
      if (focused) {
        styles = {
          ...styles,
          backgroundColor: defaultColor12Percent,
        }
        if (inverted) {
          styles = {
            ...styles,
            backgroundColor: defaultColorFocused,
          }
        }
      }
      if (disabled) {
        styles = {
          ...styles,
          ...elevation[0],
          color: 'rgba(0, 0, 0, 0.26)',
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
        }
        if (inverted) {
          styles = {
            ...styles,
            color: 'rgba(255, 255, 255, 0.52)',
            backgroundColor: 'rgba(0, 0, 0, 0.26)',
          }
        }
      }
      return styles
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
