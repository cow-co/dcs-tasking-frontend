<template>
  <queue-page />
</template>

<script>
import QueuePage from "./components/pages/QueuePage.vue";

export default {
  name: "App",
  components: {
    QueuePage,
  },
};
</script>

<style>
body {
  background-color: #2d2d2d;
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.progress-button {
  background-color: rgb(46, 117, 46);
  color: #fff;
  padding: 5px;
  border: rgb(46, 117, 55);
  border-radius: 2px;
  min-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
}

.progress-button:hover {
  background-color: rgb(36, 92, 36);
}

#app {
  text-align: center;
  margin-top: 60px;
}
</style>
