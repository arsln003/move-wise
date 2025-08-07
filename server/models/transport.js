const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Transport schema with embedded stop objects
const transportSchema = new Schema({
  transportName: String,
  type: String,
  fare: Number,
  stops: [
    {
      name: String,
      lat: Number,
      lng: Number
    }
  ]
});

const Transport = mongoose.model("Transport", transportSchema);

module.exports = Transport;
