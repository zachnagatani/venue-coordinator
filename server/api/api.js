const passport = require('passport');

module.exports = (app) => {
    /** API ENDPOINT CHECK LIST:
     * --Signup--
     * --Log In--
     * Venue
     * Going
     * Not Going
     */

    app.post('/api/signup', passport.authenticate('signup'), (req, res) => {
        res.json(req.user.generateJwt(req.user.username, req.user._id));
    });

    app.post('/api/login', passport.authenticate('login'), (req, res) => {
        res.json(req.user.generateJwt(req.user.username, req.user._id));
    });

    app.post('/api/add/venue', (req, res) => {

    });
};