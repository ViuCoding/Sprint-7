<template>
  <div v-for="(quote, id) in quoteList" :key="id">
    <h5>Name: {{ quote.name }}</h5>
    <p>Project Name: {{ quote.project }}</p>
    <p>ID:{{ id }}</p>
    <h6>Total: {{ quote.total }}</h6>
  </div>
</template>

<script>
export default {
  props: ["quoteList"],
};
</script>

<style></style>
