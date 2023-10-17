const mongoose = require("mongoose");
const User = require("./userModel");

const eventSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Use "User" here with an uppercase "U"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  title: {
    type: String,
    required: true,
  },
  DeadlineDate: { 
    type: Date,
    required: true,
  },
 
  description:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  link:{
    type:String
  },
  image: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    default:"inVerification",
    required:true
  }

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
