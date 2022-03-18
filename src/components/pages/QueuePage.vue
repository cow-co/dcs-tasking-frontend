<template>
  <div class="queue">
    <h1>Current Tasks</h1>
    <ul class="queue-list">
      <tasking-entry />
    </ul>
    <button class="progress-button" v-on:click="this.openCreateWindow()">Create Tasking</button>
  </div>
</template>

<script>
import TaskingEntry from "../TaskingEntry.vue";

export default {
  components: { TaskingEntry },
  name: "QueuePage"   ,
  methods: {
    openCreateWindow() {
      console.log("Create Tasking");
    }
  }
}
</script>