<template>
  <a class="btn modal-trigger light-blue lighten-2" href="#create-form"
    >Create Tasking</a
  >
  <div id="create-form" class="light-blue lighten-3 modal">
    <div class="modal-content light-blue lighten-3 black-text">
      <div class="container">
        <form>
          <div class="row">
            <label for="summary" class="black-text">Summary</label>
            <input
              type="text"
              name="summary"
              id="summary"
              v-model="task.summary"
            />
          </div>
          <div class="row">
            <select name="tasktype" id="tasktype">
              <option value="" disabled selected>Task Type</option>
              <option value="CAP">CAP</option>
              <option value="SEAD">SEAD</option>
              <option value="CAS">CAS</option>
            </select>
          </div>
          <div class="row">
            <label for="server" class="black-text">Server</label>
            <input
              type="text"
              name="server"
              id="server"
              v-model="task.server"
            />
          </div>
          <div class="row s12">
            <div class="col s6">
              <label for="location" class="black-text">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                v-model="task.location"
              />
            </div>
            <div class="col s6">
              <label for="loctype" class="black-text">Location Type</label>
              <select name="loctype" id="loctype">
                <option value="" disabled selected>Location Type</option>
                <option value="LatLong">LatLong</option>
                <option value="Description">Description</option>
                <option value="MGRS">MGRS</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { createTasking } from "../backend/api-calls";
const TASKTYPES = [
  {
    value: 1,
    label: "CAP",
  },
  {
    value: 2,
    label: "SEAD",
  },
  {
    value: 3,
    label: "CAS",
  },
];

const LOCATIONTYPES = [
  {
    value: 1,
    label: "description",
  },
  {
    value: 2,
    label: "latlong",
  },
  {
    value: 3,
    label: "MGRS",
  },
];

export default {
  data() {
    return {
      taskTypes: TASKTYPES,
      locationTypes: LOCATIONTYPES,
      open: false,
      locationType: "description",
      task: {
        summary: "",
        type: "CAP",
        server: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("Sending");
      createTasking(this.task);
    },
    onChangeType(value) {
      this.task.type = value;
    },
    onChangeLocType(value) {
      this.locationType = value;
    },
  },
};
</script>

<style scoped>
/* .card {
  background: #707070;
} */
</style>
