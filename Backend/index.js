import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import connectDB from "./lib/connectDB.js";

const app = express();
app.use("/webhooks", webhookRouter); //because there is conflict between express.json and body-parser

// app.get("/test", (req, res) => {
//   res.status(200).send("It Works!!");
// });
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message || "Something Went Wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(4000, () => {
  connectDB();
  console.log("server is running!");
});

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://<your-ngrok-url>", {
//       headers: {
//         "ngrok-skip-browser-warning": "true",
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
