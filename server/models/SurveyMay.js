const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const surveyMaySchema = new Schema(
  {
    ticketnumber: {
      type: String,
    },
    employeename: {
      type: String,
    },
    phone: {
      type: String,
    },
    status: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    company: {
      type: String,
    },
    dispositionid: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("SurveyMay", surveyMaySchema);
