const passport = require('passport');

module.exports = (app) => {
    /** API ENDPOINT CHECK LIST:
     * Sign Up
     * Log In
     * Log Out
     * Going
     * Not Going
     */

    app.post('/api/signup', passport.authenticate('signup'), (req, res) => {
        res.json(req.user.generateJwt(req.user.username, req.user._id));
    });
};