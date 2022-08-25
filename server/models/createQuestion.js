const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const createQuestionSchema = new Schema(
  {
    questionbankname: {
      type: String,
    },
    questiontype: {
      type: String,
    },

    question: {},
  },
  { timestamps: true }
);
module.exports = mongoose.model("CreateQuestion", createQuestionSchema);
