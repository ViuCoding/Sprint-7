<template>
  <form>
    <div>
      <label for="pages">Number of pages </label>
      <CounterTool @updateQuantity="updatePages" />
      <!-- Button trigger modal -->
      <fa icon="fa-solid fa-circle-info" class="extra-info" data-bs-toggle="modal" data-bs-target="#pagesModal" />
    </div>
    <div>
      <label for="lang">How many languages </label>
      <CounterTool @updateQuantity="updateLangs" />
      <fa icon="fa-solid fa-circle-info" class="extra-info" data-bs-toggle="modal" data-bs-target="#langsModal" />
    </div>
  </form>

  <!-- Pages Modal -->
  <div class="modal fade" id="pagesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">Please indicate the number of pages that you want on your website.</div>
      </div>
    </div>
  </div>

  <!-- Langs Modal -->
  <div class="modal fade" id="langsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">How many languages should your website support?</div>
      </div>
    </div>
  </div>
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
.extra-info {
  color: #42b983;
  font-size: 1.5rem;
}

label {
  margin-right: 1rem;
}
.modal-content {
  border: none;
}

.modal-body {
  color: #42b983;
  border-radius: 8px;
  box-shadow: none;
  padding: 1rem;
  font-size: 1.3rem;
  border: 3px solid #42b983;
}
</style>
