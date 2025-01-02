import express from "express";
import connectDb from "./config/db";
const app = express();

connectDb();

app.listen(8000, () => {
  console.log("listening on the port 8000");
});
