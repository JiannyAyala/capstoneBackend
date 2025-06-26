import pg from "pg";

const client = new pg.Client({
  user: "jiann",
  password: "Diane0563",
  database: "quicktask",
  host: "localhost",
  port: 5432,
});

client
  .connect()
  .then(() => {
    console.log("Manual connection success");
  })
  .catch((e) => {
    console.error("Manual connection error:", e);
  })
  .finally(() => {
    client.end();
  });
