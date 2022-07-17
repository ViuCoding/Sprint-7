<template>
  <form @submit.prevent="">
    <div class="price-query">
      <h2>What would you like to do?</h2>
      <div>
        <label for="web">A web page - 500€</label>
        <input type="checkbox" id="web" :value="500" v-model="prices" @change="calculateTotal" /> <br />
        <div v-if="prices.includes(500)">
          <!-- We listen to the custom event "addFees" that gets called everytime the values of pages or languages change -->
          <Panel @addFees="addExtraFees" />
        </div>
      </div>

      <div>
        <label for="seo">SEO Consulting Service - 300€</label>
        <input type="checkbox" id="seo" :value="300" v-model="prices" @change="calculateTotal" /> <br />
      </div>

      <div>
        <label for="google">Google Ads Campaign - 200€</label>
        <input type="checkbox" id="google" :value="200" v-model="prices" @change="calculateTotal" /> <br />
      </div>
    </div>
  </form>

  <h3 v-if="totalQuote">Total: {{ totalQuote }}€</h3>
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
    };
  },

  methods: {
    calculateTotal() {
      this.totalQuote = 0;
      this.prices.forEach((price) => {
        this.totalQuote += price;
      });
    },

    // This function gets called everytime pages or languages change, because in the Panel component we are watching the values and emitting everytime they change
    addExtraFees(numPages = 1, numLanguages = 0) {
      this.calculateTotal();
      this.totalQuote += numPages * numLanguages * this.costPerPage;
    },
  },
};
</script>

<style scoped>
h3 {
  color: #42b983;
}
</style>
