<template>
  <form>
    <div>
      <label for="pages">Number of pages </label>
      <CounterTool @updateQuantity="updatePages" />
    </div>
    <div>
      <label for="lang">How many languages </label>
      <CounterTool @updateQuantity="updateLangs" />
    </div>
  </form>
</template>

<script>
import CounterTool from "./CounterTool.vue";

export default {
  name: "Panel",

  components: { CounterTool },

  methods: {
    updatePages(val) {
      this.$emit("updatePages", val);
    },
    updateLangs(val) {
      this.$emit("updateLangs", val);
    },
  },
};
</script>

<style>


label {
  margin-right: 1rem;
}
</style>
