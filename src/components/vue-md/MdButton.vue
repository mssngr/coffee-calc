<template>
  <button
    :class="{
      flat: true,
      [className]: className,
      raised: raised,
      raisedActive: raised && active,
      active: !raised && active,
      disabled: disabled,
    }"
    :id="{[id]: id}"
    :style="[baseStyles, activeStyles, overrideStyles]"
    @touchstart="startRipple"
    @mousedown="startRipple"
  >
    {{label}}
  </button>
</template>

<script>
import {primaryColor, secondaryColor, fontFamily} from './lib/variables'
import ripple from './lib/ripple'
import color from 'color'

export default {
  name: 'md-button',
  data() {
    return {
      clickedElement: undefined,
    }
  },
  props: [
    'className',
    'id',
    'active',
    'raised',
    'label',
    'disabled',
    'secondary',
    'color',
    'overrideStyles',
  ],
  computed: {
    buttonRGB() {
      return color(this.color || this.secondary ? secondaryColor : primaryColor).rgb().array()
    },
    baseStyles() {
      const defaultStyle = {
        fontFamily,
        '-tap-highlight-color': 'transparent',
      }
      if (this.raised) {
        return {
          ...defaultStyle,
          backgroundColor: this.color || this.secondary ? secondaryColor : primaryColor,
        }
      }
      return {
        ...defaultStyle,
        color: this.color || this.secondary ? secondaryColor : primaryColor,
      }
    },
    activeStyles() {
      if (this.active) {
        const buttonColor = color(this.color || this.secondary ? secondaryColor : primaryColor)
        const buttonRGB = buttonColor.rgb().array()
        return {
          backgroundColor: `rgba(${buttonRGB[0]}, ${buttonRGB[1]}, ${buttonRGB[2]}, 0.12)`,
        }
      }
      return {}
    },
  },
  methods: {
    startRipple(e) {
      if (this.clickedElement) {
        this.endRipple(e)
      }
      else {
        this.clickedElement = e.target
        ripple.start(e, e.target, this.buttonRGB)
        window.addEventListener('mouseup', this.endRipple)
        window.addEventListener('touchend', this.endRipple)
        window.addEventListener('touchcancel', this.endRipple)
      }
    },
    endRipple(e) {
      e.preventDefault()
      window.removeEventListener('mouseup', this.endRipple)
      window.removeEventListener('touchend', this.endRipple)
      window.removeEventListener('touchcancel', this.endRipple)
      if (e.target === this.clickedElement || e.target.parentNode === this.clickedElement) {
        this.$emit('click')
      }
      ripple.end()
      this.clickedElement = undefined
    },
  },
}
</script>

<style scoped>
.flat {
  display: inline-block;
  min-width: 88px;
  height: 36px;
  padding: 0 8px;
  border: none;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  overflow: hidden;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  -webkit-appearance: none;
}

.flat:focus {
  outline: none;
}

.flat:active {
  outline: none;
}

.flat::-moz-focus-inner {
  padding: 0;
  border: 0;
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
