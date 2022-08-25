const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const surveySchema = new Schema(
  {
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
    address: {
      type: String,
    },
    dateorequest: {
      type: String,
    },
    order_id: {
      type: String,
    },
    company_name: {
      type: String,
    },
    registration_no: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Survey", surveySchema);
