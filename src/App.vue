<template>
  
  <div v-if="showPage">
    <router-view />
  </div>

  <div v-else class="welcome">
    <h1>WELCOME TO PRESUPESTOS.COM</h1>
    <div class="box">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, eveniet adipisci? Nam repellendus aliquid eveniet totam iste esse, perferendis omnis corporis, ab fuga, natus sit dolor vel hic dignissimos quo enim assumenda. Sed magnam fugit veniam facere suscipit ea debitis voluptatem placeat maxime qui asperiores itaque atque similique incidunt quis sequi error, nulla quod quisquam quae! Necessitatibus tenetur molestiae consectetur velit ipsam doloremque dolorum consequuntur
        quisquam sed nemo, accusamus odio animi! Exercitationem modi error incidunt in ut nesciunt soluta esse vel alias! Omnis unde, quo consectetur, corrupti quos adipisci, culpa et ut neque iusto nobis laborum dolore. Omnis, dolorum blanditiis!
      </p>
    </div>
    <div class="box">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, eveniet adipisci? Nam repellendus aliquid eveniet totam iste esse, perferendis omnis corporis, ab fuga, natus sit dolor vel hic dignissimos quo enim assumenda. Sed magnam fugit veniam facere suscipit ea debitis voluptatem placeat maxime qui asperiores itaque atque similique incidunt quis sequi error, nulla quod quisquam quae! Necessitatibus tenetur molestiae consectetur velit ipsam doloremque dolorum consequuntur
        quisquam sed nemo, accusamus odio animi! Exercitationem modi error incidunt in ut nesciunt soluta esse vel alias! Omnis unde, quo consectetur, corrupti quos adipisci, culpa et ut neque iusto nobis laborum dolore. Omnis, dolorum blanditiis!
      </p>
    </div>
  </div>
  <div class="panel">
    <a href="#" @click="togglePage">
      <span v-if="!showPage"> GET YOUR QUOTE </span>
      <span v-else> GO BACK TO THE WELCOME PAGE</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPage: false,
    };
  },

  methods: {
    togglePage() {
      this.showPage = !this.showPage;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
#app {
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.panel {
  padding: 30px;
}
.panel a {
  font-weight: bold;
  padding: 0.8rem;
  text-decoration: none;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
}

.welcome {
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
