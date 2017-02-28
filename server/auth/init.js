const passport = require('passport'),
      User = require('./model/user'),
      login = require('./strategies/local/login'),
      signup = require('./strategies/local/signup');

module.exports = passport => {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    login(passport);
    signup(passport);
};