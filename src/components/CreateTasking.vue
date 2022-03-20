<template>
  <a class="btn modal-trigger" href="#create-form">Create Tasking</a>
  <div id="create-form" class="modal grey">
    <div class="modal-content s8">
      <div class="row s8">
        <h5>Create a New Task</h5>
        <form>
          <div class="row s8">
            <input
              type="text"
              name="summary"
              placeholder="Summary"
              id="summary"
              v-model="task.summary"
            />
          </div>
          <div class="row s8">
            <select name="tasktype" class="grey" id="tasktype">
              <option value="" disabled selected class="grey">Task Type</option>
              <option value="CAP" class="grey">CAP</option>
              <option value="SEAD" class="grey">SEAD</option>
              <option value="CAS" class="grey">CAS</option>
            </select>
          </div>
          <div class="row s8">
            <input
              type="text"
              name="server"
              placeholder="Server"
              id="server"
              v-model="task.server"
            />
          </div>
          <div class="row s8">
            <div class="col s4">
              <input
                type="text"
                name="location"
                placeholder="Location"
                id="location"
                v-model="task.server"
              />
            </div>
            <div class="col s4 grey">
              <select name="loctype" class="grey" id="loctype">
                <option value="" disabled selected class="grey">
                  Location Type
                </option>
                <option value="LatLong" class="grey">LatLong</option>
                <option value="Description" class="grey">Description</option>
                <option value="MGRS" class="grey">MGRS</option>
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
