import pg from "pg";

const isProduction = process.env.NODE_ENV === "production";

const options = isProduction
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    }
  : {
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT),
    };

console.log("DB connection options:", options);

const db = new pg.Client(options);
export default db;
