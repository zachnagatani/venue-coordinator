const passport = require('passport'),
      Venue = require('../venue/model/venue');

module.exports = (app) => {
    /** API ENDPOINT CHECK LIST:
     * --Signup--
     * --Log In--
     * Add Venue
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
        const newVenue = new Venue({
            name: req.body.venueName
        });

        // TODO: findOne?

        newPoll.save(err => {
            if (err) {
                return console.log(err);
            }

            res.json(newPoll);
        });
    });
};