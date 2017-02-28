const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      venueSchema = new Schema({
          name: {type: String, required: true, index: {unique: true}},
          going: {type: Number, required: true, default: 0}
      });

module.exports = mongoose.model('Venue', venueSchema);