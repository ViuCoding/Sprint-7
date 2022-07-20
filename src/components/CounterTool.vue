<template>
  <form class="form-container">
    <button class="button" type="button" @click="decrease"><fa class="icon-red" icon="fa-solid fa-circle-minus" /></button>
    <input class="input" type="text" v-model="quantity" />
    <button class="button" type="button" @click="increase"><fa class="icon-green" icon="fa-solid fa-circle-plus" /></button>
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
    decrease() {
      this.quantity > 0 ? this.quantity-- : (this.quantity = 0);
    },
    increase() {
      this.quantity < 0 ? (this.quantity = 0) : this.quantity++;
    },
    emitQuantity() {
      this.$emit("updateQuantity", this.quantity);
    },
  },

  watch: {
    quantity() {
      if (this.quantity >= 0) {
        this.emitQuantity();
      }
    },
  },
};
</script>

<style>
.form-container {
  width: 20%;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c3e50;
  border-radius: 30px;
}
.input {
  width: 4rem;
  text-align: center;
  padding: 5px;
  border: none;
  background: transparent;
  font-weight: 900;
  font-size: 16px;
  border-radius: 4px;
  color: white;
  margin: 0 10px;
}

.button {
  border: none;
  cursor: pointer;
  background: transparent;
}

.button:active {
  transform: scale(0.94);
}

.icon-green {
  color: #42b983;
  font-size: 1.8rem;
}
.icon-red {
  color: crimson;
  font-size: 1.8rem;
}
</style>
