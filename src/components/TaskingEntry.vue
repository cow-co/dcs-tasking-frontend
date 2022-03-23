<template>
  <div class="card light-blue lighten-3 col s12">
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
  width: 50%;
  margin-left: 25%;
  margin-bottom: 20px;
  padding: 10px 5px;
  background-color: #light-blue lighten-3;
  border-radius: 10px;
  box-shadow: black;
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
