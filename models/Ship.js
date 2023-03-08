const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shipSchema = new Schema({
  shipname: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
 capacity: {
    type: Number,
    required: true
    
  },
 
});

const Ship = mongoose.model("Ship", shipSchema);

module.exports = Ship;