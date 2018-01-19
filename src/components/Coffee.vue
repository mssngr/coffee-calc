<template scope="props">
  <div id="flex">
    <div id="coffeeApp">
      <h1>
        Coffee for
        <select v-model="servings">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
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
          :focused="size === 8"
          label="Small"
          @click="setSize(8)"
        />
        <md-button
          :raised="true"
          :primary="true"
          :inverted="true"
          :focused="size === 9.5945"
          label="Medium"
          @click="setSize(9.5945)"
        />
        <md-button
          :raised="true"
          :primary="true"
          :inverted="true"
          :focused="size === 12"
          label="Large"
          @click="setSize(12)"
        />
      </div>
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
      size: 9.5945,
      servings: 2,
      beans: 34,
      ounces: 19.189,
      smallCoffee,
      mediumCoffee,
      largeCoffee,
      cardHeader: {
        backgroundColor: 'white',
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

        case 8 * this.servings:
          return {
            id: 'sm',
            label: 'Small',
            media: smallCoffee,
          }

        case 9.5945 * this.servings:
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
    size() {
      this.ounces = this.size * this.servings
    },
    servings() {
      this.ounces = this.size * this.servings
    },
    ounces() {
      this.beans = Math.round((this.ounces * 28.3495) / 16)
    },
  },
  methods: {
    setSize(size) {
      this.size = size
    },
    setOunces(size) {
      this.ounces = size
    },
  },
}
</script>

<style scoped>
body {
  font-family: 'Roboto';
}

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

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-align: center;
  font-weight: normal;
  font-size: 2rem;
  border: 0;
  text-decoration: underline;
  background: transparent;
}

.coffeeIcon {
  width: 100%;
  height: 100%;
}

#flex {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

#coffeeApp {
  width: 100%;
  max-width: 343px;
  transform: scale(0.9);
  margin-top: -30px;
  padding-bottom: 15px;
}

#buttonsContainer {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
