let backendAddress = "http://localhost:8181";
if(process.env.PROFILE === "production") {
  backendAddress = process.env.BACKEND_ADDR;
}

export default {
  backendAddress
}