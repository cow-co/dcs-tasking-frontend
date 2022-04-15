<template>
  <div class="row">
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
  </div>
</template>

<script>
import TaskingEntry from "../TaskingEntry.vue";
import CreateTasking from "../CreateTasking.vue";
import { getTaskings } from "../../backend/api-calls";

export default {
  components: { TaskingEntry, CreateTasking },
  name: "QueuePage",
  data() {
    return {
      taskings: [],
    };
  },
  mounted() {
    console.log("Queue page mounted");
    getTaskings();
  },
};
</script>
