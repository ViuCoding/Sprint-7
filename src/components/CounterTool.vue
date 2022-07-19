<template>
  <form class="container">
    <button class="btn" type="button" @click="decrease"><fa class="icons" icon="fa-solid fa-circle-minus" /></button>
    <input class="input" type="text" v-model="quantity" />
    <button class="btn" type="button" @click="increase"><fa class="icons" icon="fa-solid fa-circle-plus" /></button>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
.input {
  width: 3rem;
  padding: 5px;
  border: none;
  background: #42b983;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  margin: 0 10px;
}

.btn {
  border: none;
  cursor: pointer;
  background: transparent;
}

.btn:active {
  transform: scale(0.94);
}

.icons {
  color: #42b983;
  font-size: 1.8rem;
}
</style>
