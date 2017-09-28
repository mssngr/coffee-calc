<template scope="props">
  <div>
    <h1>
      Coffee for
      <span>{{servings}}</span>
    </h1>
    <md-card>
      <md-card-header><h1 :style="cardHeader">{{currentSize.label}}</h1></md-card-header>
      <img class="coffeeIcon" :src="currentSize.media" />
      <h2>
        <span>{{beans}}g</span> of beans<br>
        <span>{{bloom}}g</span> of bloom water<br>
        <span>{{total}}g</span> of total water
      </h2>
    </md-card>
    <div id="buttonsContainer">
      <md-button
        :raised="true"
        :primary="true"
        :inverted="true"
        :focused="ounces === (6 * servings)"
        label="Small"
        @click="setOunces(6 * servings)"
      />
      <md-button
        :raised="true"
        :primary="true"
        :inverted="true"
        :focused="ounces === (8 * servings)"
        label="Medium"
        @click="setOunces(8 * servings)"
      />
      <md-button
        :raised="true"
        :primary="true"
        :inverted="true"
        :focused="ounces === (12 * servings)"
        label="Large"
        @click="setOunces(12 * servings)"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Utilities from './vue-md/lib/utils'

import smallCoffee from '../assets/smallCoffee.svg'
import mediumCoffee from '../assets/mediumCoffee.svg'
import largeCoffee from '../assets/largeCoffee.svg'

Vue.use(Utilities)

export default {
  name: 'coffee',
  data() {
    return {
      servings: 2,
      beans: 30,
      ounces: 16,
      smallCoffee,
      mediumCoffee,
      largeCoffee,
      cardHeader: {
        backgroundColor: 'blue',
      },
    }
  },
  computed: {
    bloom() {
      return this.beans * 2
    },
    total() {
      return this.beans * 16
    },
    currentSize() {
      switch (this.ounces) {

        case 6 * this.servings:
          return {
            id: 'sm',
            label: 'Small',
            media: smallCoffee,
          }

        case 8 * this.servings:
          return {
            id: 'md',
            label: 'Medium',
            media: mediumCoffee,
          }

        case 12 * this.servings:
          return {
            id: 'lg',
            label: 'Large',
            media: largeCoffee,
          }

        default:
          return {
            id: 'md',
            label: 'Medium',
            media: mediumCoffee,
          }

      }
    },
  },
  watch: {
    ounces() {
      this.beans = Math.round((this.ounces * 29.57) / 16)
    },
  },
  methods: {
    setOunces(size) {
      this.ounces = size
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: normal;
  font-size: 2em;
}

h2 {
  font-weight: normal;
  font-size: 1.5em;
  margin: 0;
}

h3 {
  font-size: 1.25em;
}

span {
  font-weight: bold;
}

img {
  height: 7.5em;
}

.coffeeIcon {
  width: 100%;
  height: 100%;
}

#buttonsContainer {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
