<template>
  <form>
    <button type="button" @click="quantity--">-</button>
    <input class="input" type="text" v-model="quantity" />
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

<style>
.input {
  width: 3rem;
  padding: 5px;
  border: none;
  background: #42b983;
  color: white;
  margin: 0 10px;
}
</style>
