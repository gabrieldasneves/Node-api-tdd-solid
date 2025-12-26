import { app } from "./app.js";

app
  .listen({
    host: "0.0.0.0",
    port: 3337,
  })
  .then(() => {
    console.log("🧑‍💻Server is running on port 3337");
  });
