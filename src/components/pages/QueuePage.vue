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
        :type="tasking.type"
      />
    </ul>
    <create-tasking></create-tasking>
  </div>
</template>

<script>
import TaskingEntry from "../TaskingEntry.vue";
import CreateTasking from "../CreateTasking.vue";

export default {
  components: { TaskingEntry, CreateTasking },
  name: "QueuePage",
  data() {
    return {
      taskings: [
        {
          id: 1,
          summary: "Task 1",
          location: "Gudauta",
          server: "4YA",
          type: "SEAD",
        },
        {
          id: 2,
          summary: "Task 2",
          location: "MinVody",
          server: "4YA",
          type: "CAP",
        },
      ],
    };
  },
};
</script>
