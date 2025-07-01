import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./Db/index.js"
// import router from "./Routes/uploadCsvRoute.js";

dotenv.config({
  path: "./.env"
})

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
// app.use("/api", router);

ConnectDb()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server Running at Port : ${process.env.PORT}`);
  } )
})
.catch((error) => {
console.log(`Error While Connecting ${error}`)
})
