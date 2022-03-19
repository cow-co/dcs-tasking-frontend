async function createTasking(taskingDetails) {
  console.debug("Creating tasking...");
  await fetch({method: "PUT", body: JSON.stringify(taskingDetails)}); // TODO Fill this out properly
}

export {
  createTasking
}