import express, { urlencoded } from "express";
import connectDb from "./Db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env"
})

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static());

connectDb()

.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server Running at Port : ${process.env.PORT}`);
  } )
})
.catch((error) => {
console.error(`Error While Connecting ${error}`)
})
