import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
const app = express();

// app.get("/test", (req, res) => {
//   res.status(200).send("It Works!!");
// });
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(4000, () => {
  connectDB();
  console.log("server is running!");
});
