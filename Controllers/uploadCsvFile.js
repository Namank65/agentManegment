import csv from "csv-parser"
import xlsx from "xlsx"
import { distributeTasks } from "../Utils/distributeTasks";
import { Task } from "../Models/Task";

export async function handleFileUpload (req, res) {
  try {
    const file = req.file;
    console.log(req);
    

    if (!file) return res.status(400).json({ message: "No file uploaded" });

    let entries = [];

    if (file.mimetype === "text/csv") {
      const buffer = file.buffer.toString();
      const lines = buffer.split("\n").slice(1);
      for (const line of lines) {
        const [FirstName, Phone, Notes] = line.split(",");
        if (FirstName && Phone) {
          entries.push({ FirstName, Phone, Notes });
        }
      }
    } else {
      const workbook = xlsx.read(file.buffer, { type: "buffer" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      entries = xlsx.utils.sheet_to_json(sheet);
    }

    if (entries.length === 0) return res.status(400).json({ message: "No valid entries found" });

    // Split entries among 5 agents
    const distributed = distributeTasks(entries, 5);

    // Save each agent's tasks to DB
    for (const agentId in distributed) {
      await Task.create({
        agentId, // this can be static or mocked for now
        tasks: distributed[agentId],
      });
    }

    res.status(200).json({ message: "Tasks uploaded and distributed successfully", distributed });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
