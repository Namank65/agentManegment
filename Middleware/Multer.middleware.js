import express from "express";
import multer from "multer";
import { handleFileUpload } from "../Controllers/uploadCsvFile";
const router = express.Router();

const storage = multer.memoryStorage(); // store in memory
const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Invalid file type"));
  }
});

router.post("/upload", upload.single("file"), handleFileUpload);

export default router;