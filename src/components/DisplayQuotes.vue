<template>
  <div v-for="quote in quoteList" :key="quote">
    <h5>{{ quote.name }}</h5>
    <p>{{quote.project}}</p>
    
  </div>
</template>

<script>
export default {
  props: ["quoteList"],
};
</script>

<style></style>
