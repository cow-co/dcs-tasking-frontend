<template>
  <div class="container">
    <queue-page />
  </div>
</template>

<script>
import QueuePage from "./components/pages/QueuePage.vue";
import M from "materialize-css";

export default {
  name: "App",
  components: {
    QueuePage,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #b3e5fc;
}

.progress-button {
  padding: 5px;
  border-radius: 2px;
  min-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
}

#app {
  text-align: center;
  margin-top: 60px;
}
</style>
