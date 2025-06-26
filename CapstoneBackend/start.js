// start.cjs
require("dotenv").config();

import("./server.js")
  .then(() => {
    console.log("Server started");
  })
  .catch((e) => {
    console.error("Failed to start server:", e);
  });
