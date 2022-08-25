const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const alTestSchema = new Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    mobile: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    ticket_no: {
      type: String,
    },
    order_id: {
      type: String,
    },
    dateorequest: {
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
module.exports = mongoose.model("AlTest", alTestSchema);
