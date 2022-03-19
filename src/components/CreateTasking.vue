<template>
  <ui-fab extended icon="add_task" @click="open = true">Create Tasking</ui-fab>
  <ui-dialog v-model="open" @confirm="onSubmit">
    <ui-dialog-title>Create a New Task</ui-dialog-title>
    <ui-dialog-content>
      <ui-form>
        <ui-form-field>
          <label class="required">Summary:</label>
          <ui-textfield></ui-textfield>
        </ui-form-field>
      </ui-form>
    </ui-dialog-content>
    <ui-dialog-actions></ui-dialog-actions>
  </ui-dialog>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("Sending");
    },
  },
};
</script>
