const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  favorites: [
    {
      pickup: {
        name: String,
        lat: Number,
        lng: Number
      },
      dropoff: {
        name: String,
        lat: Number,
        lng: Number
      },
      addedAt: {
        type: Date,
        default: Date.now
      },
      transport: {
        type: Schema.Types.ObjectId,
        ref: 'Transport'
      }
    }
  ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
