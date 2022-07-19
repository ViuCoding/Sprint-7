<template>
  <form>
    <button type="button" @click="quantity--">-</button>
    <input type="text" v-model="quantity" />
    <button type="button" @click="quantity++">+</button>
  </form>
</template>

<script>
export default {
  name: "CounterTool",
  data() {
    return {
      quantity: 0,
    };
  },

  methods: {
    emitQuantity() {
      this.$emit("updateQuantity", this.quantity);
    },
  },

  watch: {
    quantity() {
      this.emitQuantity();
    },
  },
};
</script>

<style></style>
