const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const Leaves = new Schema({
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: "Employees",
  },
  submissionDate: { type: Date, default: Date.now },
  startDate: { type: Date },
  dueDate: { type: Date },
  leaveStatus: {
    type: String,
    enum: ["Yes", "No"],
  },
  Proof: { type: Buffer },
});

module.exports = mongoose.model("Leaves", Leaves);
