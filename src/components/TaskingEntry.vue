<template>
  <li class="tasking-entry">
    <p>{{ server }}</p>
  </li>
</template>

<script>
export default {
  name: "TaskingEntry",
  props: ["summary", "location", "server"],
};
</script>
