import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import router from "./routes/v1/index.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("LORRY EXPENSES APP");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
