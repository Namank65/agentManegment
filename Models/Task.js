import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  agentId: String, // agent1, agent2 etc., or reference Agent model later
  tasks: [
    {
      FirstName: String,
      Phone: String,
      Notes: String,
    }
  ]
});

export const Task = mongoose.model("Task", taskSchema);