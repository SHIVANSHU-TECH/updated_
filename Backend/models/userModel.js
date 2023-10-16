const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter an name"],
  },

  email: {
    type: String,
    required: [true, "please Enter an email"],
    unique: [true, "Email already exist"],
  },

  password: {
    type: String,
    required: [true, "please enter an password"],

    minlength: [6, "password must be atleast 6 characters"],
  },
  isAdmin:{
    type:Boolean,
    default:false,
    required:true
  }
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
