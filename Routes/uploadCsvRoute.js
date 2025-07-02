import {Router} from "express";
import { handleFileUpload } from "../Controllers/uploadCsvFile.js";
import upload from "../Middleware/Multer.middleware.js";

const router = Router();

router.route("/upload").post(upload.single("file"), handleFileUpload)

export default router;