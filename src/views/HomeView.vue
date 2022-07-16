<template>
  <form @submit.prevent="">
    <div class="price-query">
      <h2>What would you like to do?</h2>
      <div>
        <label for="web">A web page - 500€</label>
        <input type="checkbox" id="web" :value="500" v-model="prices" @change="calculateTotal" /> <br />
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

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      prices: [],
      totalQuote: 0,
    };
  },

  methods: {
    calculateTotal() {
      this.totalQuote = 0;
      this.prices.forEach((price) => {
        this.totalQuote += price;
      });

    },
  },
};
</script>

<style scoped>
h3 {
  color: teal;
}
</style>
