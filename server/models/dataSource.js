const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSource = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("DataSource", dataSource);
