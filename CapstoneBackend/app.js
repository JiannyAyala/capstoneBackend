import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

import usersRouter from "#api/users.js";
import workoutsRouter from "#api/workouts/index.js";
import goalsRouter from "#api/goals/index.js";

import getUserFromToken from "#middleware/getUserFromToken.js";
import handlePostgresErrors from "#middleware/handlePostgresErrors.js";

const app = express();

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN ?? /localhost/ }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(getUserFromToken);

// Health check
app.get("/", (req, res) => res.send("Hello, World!"));

// Routes
app.use("/users", usersRouter);
app.use("/api/workouts", workoutsRouter);
app.use("/api/goals", goalsRouter);

// Error handlers (these go LAST)
app.use(handlePostgresErrors);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});

export default app;
