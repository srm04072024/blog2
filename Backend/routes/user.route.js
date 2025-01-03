import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.status(200).send("Hello, from user routes!!");
});

export default router;
