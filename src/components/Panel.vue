<template>
  <form>
    <div>
      <label for="pages">Number of pages </label>
      <input type="number" id="pages" v-model="numPages" min="0" />
    </div>
    <div>
      <label for="lang">How many languages </label>
      <input type="number" id="lang" v-model="numLangs" min="0" />
    </div>
  </form>
</template>

<script>
import CounterTool from "./CounterTool.vue";

export default {
  name: "Panel",
  props: ["numPages", "numLangs"],

  components: { CounterTool },

  methods: {
    extraFees() {
      this.$emit("addFees", this.numPages, this.numLangs);
    },
  },

  watch: {
    // Each time the value of "pages" changes we call the function that emits the values to the parent component
    numPages() {
      this.extraFees();
    },
    // Each time the value of "languages" changes we call the function that emits the values to the parent component
    numLangs() {
      this.extraFees();
    },
  },
};
</script>

<style scoped>
form {
  border: 1px solid #42b983;
  border-radius: 10px;
}
form div {
  margin: 1rem 0;
}
</style>
