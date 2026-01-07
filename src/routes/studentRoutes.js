import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* PUBLIC */
router.get("/", (req, res) => {
  res.json({ message: "Student list (public)" });
});

/* PROTECTED */
router.post("/", authMiddleware, (req, res) => {
  res.json({ message: "Student created" });
});

router.put("/:id", authMiddleware, (req, res) => {
  res.json({ message: "Student updated" });
});

router.delete("/:id", authMiddleware, (req, res) => {
  res.json({ message: "Student deleted" });
});

export default router;
