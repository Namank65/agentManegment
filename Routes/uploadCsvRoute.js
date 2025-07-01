import express from "express";
import { handleFileUpload } from "../Controllers/uploadCsvFile";
import upload from "../Middleware/Multer.middleware";

const router = express.Router();

router.post("/upload", upload("file"), handleFileUpload);

// export default router