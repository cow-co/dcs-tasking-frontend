import conf from "../conf/conf";

async function createTasking(taskingDetails) {
  console.debug(`Creating tasking ${JSON.stringify(taskingDetails)}...`);
  await fetch(`${conf.backendAddress}/taskings`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskingDetails),
  }); // TODO check for error response
}

async function getTaskings() {
  console.debug(`Getting taskings...`);
  let taskings;
  const response = await fetch(`${conf.backendAddress}/taskings`, {
    method: "GET",
  });
  taskings = JSON.parse(response.json()); // TODO Check for error response
  return taskings;
}

export { createTasking, getTaskings };
