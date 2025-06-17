import express from "express";
import db from "#db/client";

const router = express.Router();

// GET /goals - Get all goals for the logged-in user
router.get("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    const result = await db.query(
      "SELECT * FROM goals WHERE user_id = $1 ORDER BY created_at DESC",
      [req.user.id]
    );

    res.send(result.rows);
  } catch (error) {
    next(error);
  }
});

// POST /goals - Add a new goal
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    const { description, deadline } = req.body;

    const result = await db.query(
      `INSERT INTO goals (description, deadline, user_id)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [description, deadline, req.user.id]
    );

    res.status(201).send(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

export default router;
