<template>
  <div class="queue">
    <h1>Current Tasks</h1>
    <ul class="queue-list">
      <tasking-entry
        v-for="tasking in taskings"
        :key="tasking.id"
        :summary="tasking.summary"
        :location="tasking.location"
        :server="tasking.server"
      />
    </ul>
    <button class="progress-button" v-on:click="this.openCreateWindow()">
      Create Tasking
    </button>
  </div>
</template>

<script>
import TaskingEntry from "../TaskingEntry.vue";

export default {
  components: { TaskingEntry },
  name: "QueuePage",
  methods: {
    openCreateWindow() {
      console.log("Create Tasking");
    },
  },
  data() {
    return {
      taskings: [
        {
          id: 1,
          summary: "Task 1",
          location: "Gudauta",
          server: "4YA",
        },
        {
          id: 2,
          summary: "Task 2",
          location: "MinVody",
          server: "4YA",
        },
      ],
    };
  },
};
</script>
