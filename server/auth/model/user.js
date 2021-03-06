const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      userSchema = new Schema({
          username: {type: String, required: true, index: {unique: true}},
          email: {type: String, required: true, index: {unique: true}},
          password: {type: String, required: true}
      }),
      SECRET = process.env.SECRET,
      jwt = require('jsonwebtoken');

userSchema.methods.generateJwt = (username, id) => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: id,
        username: username,
        exp: parseInt(expiry.getTime() / 1000)
    }, SECRET);
};

module.exports = mongoose.model('User', userSchema);