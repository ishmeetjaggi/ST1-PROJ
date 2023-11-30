const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
 
});

module.exports = mongoose.model("Trainer", trainerSchema);

