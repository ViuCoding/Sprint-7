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

<style scoped>
form {
  border: 1px solid #42b983;
  border-radius: 10px;
}
form div {
  margin: 1rem 0;
}
</style>
