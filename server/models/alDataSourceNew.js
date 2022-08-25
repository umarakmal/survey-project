const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const alDataSourceNewSchema = new Schema(
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
    address: {
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
module.exports = mongoose.model("AlDataSourceNew", alDataSourceNewSchema);
