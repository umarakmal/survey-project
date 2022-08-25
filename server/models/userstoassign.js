const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userstoassignSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    usertype: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("UsersToAssign", userstoassignSchema);
