<template>
  <form>
    <div class="price-query">
      <h1>What would you like to do?</h1>
      <div class="input-box">
        <label for="web">Web Page <span class="prices">500€</span></label>
        <input type="checkbox" id="web" :value="500" v-model="prices" @change="calculateTotal" /> <br />
        <div v-if="prices.includes(500)" class="panel">
          <Panel @updatePages="updateNumPages" @updateLangs="updateNumLangs" />
        </div>
      </div>

      <div class="input-box">
        <label for="seo">SEO Consulting Service <span class="prices">300€</span></label>
        <input type="checkbox" id="seo" :value="300" v-model="prices" @change="calculateTotal" /> <br />
      </div>

      <div class="input-box">
        <label for="google">Google Ads Campaign <span class="prices">200€</span></label>
        <input type="checkbox" id="google" :value="200" v-model="prices" @change="calculateTotal" /> <br />
      </div>
    </div>
  </form>

  <h2 v-if="totalQuote">Total: {{ totalQuote }}€</h2>
</template>

<script>
// @ is an alias to /src
import Panel from "../components/Panel.vue";

export default {
  name: "HomeView",

  components: { Panel },

  data() {
    return {
      prices: [],
      totalQuote: 0,
      costPerPage: 30,
      numPages: 0,
      numLangs: 0,
    };
  },

  methods: {
    calculateTotal() {
      this.totalQuote = 0;
      this.prices.forEach((price) => {
        this.totalQuote += price;
      });
      if (this.prices.includes(500)) {
        this.totalQuote += this.numPages * this.numLangs * this.costPerPage;
      } else {
        this.numPages = 0;
        this.numLangs = 0;
      }
    },
    updateNumPages(val) {
      this.numPages = val;
      this.calculateTotal();
    },
    updateNumLangs(val) {
      this.numLangs = val;
      this.calculateTotal();
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}

label {
  font-size: 1.5rem;
}

.input-box {
  margin: 3rem 0;
}
.prices {
  background: #2c3e50;
  color: white;
  padding: 8px;
  border-radius: 30px;
}
</style>
