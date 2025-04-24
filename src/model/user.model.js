const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    email: String,
    phone: Number,
    age: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const User = mongoose.model('user', UserSchema);


module.exports = User;
