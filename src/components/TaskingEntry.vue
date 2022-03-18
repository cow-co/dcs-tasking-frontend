<template>
  <div class="tasking-entry">
    <p>Task: {{ summary }}</p>
    <p>Server: {{ server }}</p>
    <p>Location: {{ location }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskingEntry",
  props: ["summary", "location", "server"],
};
</script>

<style scoped>
.tasking-entry {
  background-color: gray;
  width: 50%;
  margin-left: 25%;
  margin-bottom: 20px;
  min-height: 65px;
  border-radius: 5px;
  padding: 10px 5px;
}
</style>
