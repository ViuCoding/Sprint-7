<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.8rem;
  text-decoration: none;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  background-color: #42b983;
  color: white;
}
</style>
