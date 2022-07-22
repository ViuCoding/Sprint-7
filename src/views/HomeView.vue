<template>
  <form @submit.prevent="handleSubmit">
    <div class="price-query">
      <h1>What would you like to do?</h1>
      <div class="input-box">
        <label for="web">Web Page <span class="prices">500€</span></label>
        <div class="center"><input type="checkbox" id="web" :value="500" v-model="prices" @change="calculateTotal" /> <br /></div>
      </div>
      <div v-show="prices.includes(500)" class="panel">
        <Panel @updatePages="updateNumPages" @updateLangs="updateNumLangs" />
      </div>

      <div class="input-box">
        <label for="seo">SEO Consulting Service <span class="prices">300€</span></label>
        <input type="checkbox" id="seo" :value="300" v-model="prices" @change="calculateTotal" /> <br />
      </div>

      <div class="input-box">
        <label for="google">Google Ads Campaign <span class="prices">200€</span></label>
        <input type="checkbox" id="google" :value="200" v-model="prices" @change="calculateTotal" /> <br />
      </div>
    </div>

    <div class="client-info input-box">
      <label for="name">Your Name: </label>
      <input type="text" id="name" v-model="userName" required />
      <label for="project">Name your project: </label>
      <input type="text" id="project" v-model="projectName" required />
    </div>

    <button class="btn btn-danger">Submit</button>
  </form>

  <h2 v-if="totalQuote" class="total">Total: {{ totalQuote }}€</h2>

  <DisplayQuotes :quoteList="quoteList" />
</template>

<script>
// @ is an alias to /src
import Panel from "../components/Panel.vue";
import DisplayQuotes from "../components/DisplayQuotes.vue";

export default {
  name: "HomeView",

  components: { Panel, DisplayQuotes },

  data() {
    return {
      prices: [],
      totalQuote: 0,
      costPerPage: 30,
      numPages: 0,
      numLangs: 0,
      quoteList: [],
      userName: "",
      projectName: "",
    };
  },

  methods: {
    calculateTotal() {
      this.totalQuote = 0;
      this.prices.forEach((price) => {
        this.totalQuote += price;
      });
      if (this.prices.includes(500)) {
        this.totalQuote += this.numPages * this.numLangs * this.costPerPage;
      } else {
        this.numPages = 0;
        this.numLangs = 0;
      }
    },
    updateNumPages(val) {
      this.numPages = val;
      this.calculateTotal();
    },
    updateNumLangs(val) {
      this.numLangs = val;
      this.calculateTotal();
    },

    handleSubmit() {
      console.log("Form submitted");
      this.quoteList.push({
        name: this.userName,
        project: this.projectName,
        total: this.totalQuote,
      });

      console.log(this.quoteList);
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem 0;
}

.total {
  color: #42b983;
  margin: 2rem 0;
}

label {
  font-size: 1.5rem;
}

.input-box {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-info {
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  border-radius: 5px;
  border: none;
  background: #42b983;
  text-align: center;
  padding: 5px;
  color: white;
}

input[type="checkbox"] {
  cursor: pointer;
  position: relative;
  width: 60px;
  height: 30px;
  appearance: none;
  background: #2c3e50;
  outline: none;
  border-radius: 20px;
  transition: 0.5s;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

input:checked[type="checkbox"] {
  background: #42b983;
}

input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
  transition: 0.5s;
}

input:checked[type="checkbox"]:before {
  left: 30px;
}

.prices {
  background: #2c3e50;
  color: white;
  padding: 8px;
  border-radius: 30px;
}
</style>
