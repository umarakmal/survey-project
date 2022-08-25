const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const submitMaySurveySchema = new Schema(
  {
    mobile: {
      type: String,
    },
    openingscript: {
      type: String,
    },
    question1: {
      type: String,
    },
    question2: {
      type: String,
    },
    reason: {
      type: String,
    },
    reasonsubdisposition: {
      type: String,
    },
    closingscript: {
      type: String,
    },
    disposition: {
      type: String,
    },
    subdisposition: {
      type: String,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("SubmitMaySurvey", submitMaySurveySchema);
