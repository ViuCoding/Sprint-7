<template>
  <div v-for="(quote, id) in quoteList" :key="id" class="quote-card">
    <p><b>Name:</b> {{ quote.name }}</p>
    <p><b>Project Name:</b> {{ quote.project }}</p>
    <p><b>Project ID:</b> {{ id }}</p>
    <p class="total-price">Total: {{ quote.total }}€</p>
  </div>
</template>

<script>
export default {
  props: ["quoteList"],
};
</script>

<style scoped>
* {
  margin: 0;
}

.quote-card {
  margin: 2rem auto;
  box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.6);
  padding: 1rem 0;
  width: 40%;
  border-radius: 5px;
}

.total-price {
  font-weight: bold;
  color: #42b983;
}
</style>
