const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sheetSchema = new Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    surveyname: {
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
    totalrecord: {
      type: String,
    },
    surveycompleted: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Sheet", sheetSchema);
