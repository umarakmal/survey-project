const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const questionListSchema = new Schema(
  {
    lob: {
      type: String,
      default: "Ashok Leyland",
    },
    questionbankname: {
      type: String,
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("QuestionList", questionListSchema);
