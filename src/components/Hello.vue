<template>
  <div>
    <mu-card class="card">
      <mu-card-header>
      </mu-card-header>
      <mu-card-media>
        <img :src="currentSize" />
      </mu-card-media>
      <mu-card-text>
        <h2>
          <span>{{beans}}g</span> of beans<br>
          <span>{{bloom}}g</span> of bloom water<br>
          <span>{{total}}g</span> of total water
        </h2>
      </mu-card-text>
    </mu-card>
    <div id="buttonsContainer">
      <mu-raised-button :primary="ounces === 6" label="Small" class="sizeButton" @click="setOunces(6)" />
      <mu-raised-button :primary="ounces === 8" label="Medium" class="sizeButton" @click="setOunces(8)" />
      <mu-raised-button :primary="ounces === 12" label="Large" class="sizeButton" @click="setOunces(12)" />
    </div>
  </div>
</template>

<script>
import smallCoffee from '../assets/smallCoffee.svg'
import mediumCoffee from '../assets/mediumCoffee.svg'
import largeCoffee from '../assets/largeCoffee.svg'

export default {
  name: 'hello',
  data () {
    return {
      beans: 30,
      ounces: 16,
      ounceOptions: [6, 8, 12, 16, 24],
      smallCoffee,
      mediumCoffee,
      largeCoffee
    }
  },
  computed: {
    bloom: function () {
      return this.beans * 2
    },
    total: function () {
      return this.beans * 16
    },
    currentSize: function () {
      switch (this.ounces) {
        case 6:
          return smallCoffee

        case 8:
          return mediumCoffee

        case 12:
          return largeCoffee

        default:
          return mediumCoffee
      }
    }
  },
  watch: {
    ounces: function (newOuncesAmt) {
      this.beans = Math.round((this.ounces * 29.57) / 16)
    }
  },
  methods: {
    setOunces: function (size) {
      this.ounces = size
    }
  }
}
</script>

<style scoped>
h1 {
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

.sizeButton {
  width: 30vw;
}

#buttonsContainer {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
