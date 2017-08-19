<template>
  <button :class="`default ${primary && 'primary'} ${secondary && 'secondary'}`" @click="onClick">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'material-button',
  props: ['primary', 'secondary', 'label'],
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style>
.default {
  border: 0;
  border-radius: 2px;
}

.primary {
  background-color: var(--primary-color);
}
</style>
