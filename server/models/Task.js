const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  commeht: {
    type: String,
    required: true,
  },
  username: {
    tye: String,
    required: true,
  },
});

const TaskSchema = new mongoose.Schema(
  {
    taskname: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },
    projectid: {
      type: String,
    },
    projectname: {
      type: String,
    },
    status: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      default: "",
    },
    overview: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      default: "",
    },
    duedate: {
      type: String,
      default: "",
    },
    members: [],
    comments: [CommentSchema],
  },
  {timestamps: true}
);

module.exports = mongoose.model("Task", TaskSchema);
