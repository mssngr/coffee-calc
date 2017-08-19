<template>
  <div>
    <h1>
      Coffee for
      <span>{{servings}}</span>
    </h1>
    <div class="card">
      <img :src="currentSize" />
      <h2>
        <span>{{beans}}g</span> of beans<br>
        <span>{{bloom}}g</span> of bloom water<br>
        <span>{{total}}g</span> of total water
      </h2>
    </div>
    <div id="buttonsContainer">
      <material-button :primary="ounces === (6 * servings)" label="Small" @click="setOunces(6 * servings)" />
      <material-button :primary="ounces === (8 * servings)" label="Medium" @click="setOunces(8 * servings)" />
      <material-button :primary="ounces === (12 * servings)" label="Large" @click="setOunces(12 * servings)" />
    </div>
  </div>
</template>

<script>
import MaterialButton from './material/MaterialButton.vue'
import smallCoffee from '../assets/smallCoffee.svg'
import mediumCoffee from '../assets/mediumCoffee.svg'
import largeCoffee from '../assets/largeCoffee.svg'

export default {
  name: 'coffee',
  components: {
    MaterialButton,
  },
  data() {
    return {
      servings: 2,
      beans: 30,
      ounces: 16,
      smallCoffee,
      mediumCoffee,
      largeCoffee,
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
          return smallCoffee

        case 8 * this.servings:
          return mediumCoffee

        case 12 * this.servings:
          return largeCoffee

        default:
          return mediumCoffee

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

.card {
  margin: 2em;
}

#buttonsContainer {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
