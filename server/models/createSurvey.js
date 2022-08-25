const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const createSurveySchema = new Schema(
  {
    questionbucket: {
      type: String,
    },
    templatename: {
      type: String,
    },
    selectedquestion: {},
    openingscript: {
      type: String,
    },
    closingscript: {
      type: String,
    },
    startdate: {
      type: String,
    },
    enddate: {
      type: String,
    },
    status: {
      type: String,
    },
    channel: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("CreateSurvey", createSurveySchema);
