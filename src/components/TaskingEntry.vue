<template>
  <div class="tasking-entry">
    <h3>{{ type }}: {{ summary }}</h3>
    <div class="cells">
      <div class="info-cell">
        <p><b>Server:</b> {{ server }}</p>
        <p><b>Location:</b> {{ location }}</p>
      </div>
      <div class="assigned-cell">
        <ul>
          <div v-for="player in assigned" :key="player.playerName">
            <p>
              <b>{{ player.playerName }}: </b>{{ player.aircraft }}
            </p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskingEntry",
  props: ["summary", "location", "server", "type"],
  data() {
    return {
      assigned: [
        {
          playerName: "Player1",
          aircraft: "F-16C",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tasking-entry {
  background-color: #707070;
  width: 50%;
  margin-left: 25%;
  margin-bottom: 20px;
  min-height: 65px;
  max-height: 150px;
  border-radius: 5px;
  padding: 10px 5px;
}

h3 {
  margin: 0;
}

.cells {
  margin: 0;
  padding: 0;
  display: flex;
}

.info-cell {
  margin: 0;
  padding: 0;
  min-width: 50%;
  max-width: 50%;
  overflow: hidden;
}

.assigned-cell {
  margin-top: 0;
  padding: 0;
  width: 50%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
