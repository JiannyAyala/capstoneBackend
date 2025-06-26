import dotenv from "dotenv";
dotenv.config();

console.log("PGUSER:", process.env.PGUSER);
console.log("PGDATABASE:", process.env.PGDATABASE);
console.log("PGPASSWORD:", process.env.PGPASSWORD ? "***hidden***" : "not set");
console.log("PGHOST:", process.env.PGHOST);
console.log("PGPORT:", process.env.PGPORT);

import app from "#app";
import db from "#db/client";

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
