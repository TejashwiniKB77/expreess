import mongoose from "mongoose";

const errorLogSchema = new mongoose.Schema({
  message: String,
  endpoint: String,
  method: String,
  statusCode: Number,
  category: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("ErrorLog", errorLogSchema);
