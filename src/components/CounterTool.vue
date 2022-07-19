<template>
  <form>
    <button type="button" @click="decrease">-</button>
    <input type="text" :value="quantity" />
    <button type="button" @click="increase">+</button>
  </form>
</template>

<script>
export default {
  name: "CounterTool",
  props: ["pages", "languages"],
  data() {
    return {
      quantity: 0,
    };
  },

  methods: {
    decrease() {},
    increase() {},
  },
};
</script>

<style></style>
