const mongoose = require("mongoose");


const jobSchema = new mongoose.Schema({
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
  companyName: {
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
  
  link: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    default:"inVerification",
    required:true
  }

});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;
