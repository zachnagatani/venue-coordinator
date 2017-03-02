const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      // Each Venue is only tracked by ID. A count is used to indicate how many are going,
      // and users are tracked to keep the count accurate
      venueSchema = new Schema({
          _id: {type: String, required: true, index: {unique: true}},
          count: {type: Number, default: 0},
          users: {type: Array, default: []}
      });

module.exports = mongoose.model('Venue', venueSchema);