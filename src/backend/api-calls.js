async function createTasking(taskingDetails) {
  console.debug(`Creating tasking ${JSON.stringify(taskingDetails)}...`);
  if (process.env.PROFILE === "production") {
    await fetch(`${process.env.BACKEND_ADDR}/taskings`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskingDetails),
    });
  }
}

export { createTasking };
