import express from "express";
import db from "#db/client";

const router = express.Router();

// GET /workouts - Get all workouts for the logged-in user
router.get("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    const result = await db.query(
      "SELECT * FROM workouts WHERE user_id = $1 ORDER BY created_at DESC",
      [req.user.id]
    );

    res.send(result.rows);
  } catch (error) {
    next(error);
  }
});

// POST /workouts - Log a new workout
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    const { type, intensity, duration } = req.body;

    const result = await db.query(
      `INSERT INTO workouts (type, intensity, duration, user_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [type, intensity, duration, req.user.id]
    );

    res.status(201).send(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

export default router;
