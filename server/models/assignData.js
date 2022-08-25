const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const assignDataSchema = new Schema(
  {
    assigningData: {
      //   type: String,
    },
    userid: {
      //  type: Stri ng,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("AssignData", assignDataSchema);
