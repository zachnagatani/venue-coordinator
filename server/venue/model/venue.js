const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      venueSchema = new Schema({
          _id: {type: String, required: true, index: {unique: true}},
          count: {type: Number, default: 0},
          users: {type: Array, default: []}
      });

module.exports = mongoose.model('Venue', venueSchema);