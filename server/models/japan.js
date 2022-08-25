const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const japanSchema = new Schema(
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
    vehicle_no: {
      type: String,
    },
    company: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    dispositionid: {
      type: String,
    },
    id: {
      type: String,
    },
    created_at: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Japan", japanSchema);
