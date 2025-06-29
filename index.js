import express from "express";
import connectDb from "./Db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env"
})


connectDb()
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});