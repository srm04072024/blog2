import express from "express";

const router = express.Router();

router.get("/commenttest", (req, res) => {
  res.status(200).send("Hello, from comment routes!!");
});

export default router;
