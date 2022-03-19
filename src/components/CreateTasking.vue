<template>
  <ui-fab extended icon="add_task" @click="open = true">Create Tasking</ui-fab>
  <ui-dialog v-model="open" @confirm="onSubmit" class="create-tasking">
    <ui-dialog-title>Create a New Task</ui-dialog-title>
    <ui-dialog-content>
      <ui-form nowrap item-margin-bottom="16" label-width="80">
        <ui-form-field>
          <label class="required">Summary:</label>
          <ui-textfield></ui-textfield>
        </ui-form-field>
        <ui-form-field>
          <label class="required">Type:</label>
          <ui-select
            v-model="task.type"
            :options="taskTypes"
            default-label="Type"
            @change="onChangeType($event)"
          ></ui-select>
        </ui-form-field>
      </ui-form>
    </ui-dialog-content>
    <ui-dialog-actions></ui-dialog-actions>
  </ui-dialog>
</template>

<script>
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

export default {
  data() {
    return {
      taskTypes: TASKTYPES,
      open: false,
      task: {
        summary: "",
        type: "CAP",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("Sending");
    },
    onChangeType(value) {
      this.task.type = value;
    },
  },
};
</script>

<style scoped>
.create-tasking {
  color: white;
}
</style>
