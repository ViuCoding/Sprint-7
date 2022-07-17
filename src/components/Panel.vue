<template>
  <form>
    <div>
      <label for="pages">Number of pages </label>
      <input type="number" id="pages" v-model="pages" min="0" />
    </div>
    <div>
      <label for="lang">How many languages </label>
      <input type="number" id="lang" v-model="languages" min="0" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      pages: undefined,
      languages: undefined,
      extraCost: 0,
    };
  },
  methods: {
    extraFees() {
      this.$emit("addFees", this.pages, this.languages);
    },
  },
  watch: {
    // Each time the value of "pages" changes we call the function that emits the values to the parent component
    pages() {
      this.extraFees();
    },
      // Each time the value of "languages" changes we call the function that emits the values to the parent component
    languages() {
      this.extraFees();
    },
  },
};
</script>

<style scoped>
form {
  border: 3px solid #42b983;
  border-radius: 10px;
}
form div {
  margin: 1rem 0;
}
</style>
