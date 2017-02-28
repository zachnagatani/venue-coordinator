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

    app.post('/api/venue/add', (req, res) => {
        Venue.findById({
            _id: req.body.venueId
        }, (err, venue) => {
            if (venue) {
                res.send('venue already exists');
                return;
            }

            const newVenue = new Venue({
                _id: req.body.venueId
            });

            newVenue.save(err => {
                if (err) {
                    return console.log(err);
                }

                res.json(newVenue);
            });
        });
    });

    app.patch('/api/venue/increment', (req, res) => {
        Venue.findById({
            _id: req.body.venueId
        }, (err, venue) => {
            if (err) {
                return console.log(err);
            }

            if (!venue.users.includes(req.body.username)) {
                Venue.findByIdAndUpdate({
                    _id: req.body.venueId,
                }, {
                    $inc: {count: 1},
                    $push: {users: req.body.username}
                }, {
                    new: true
                }, (err, venue) => {
                    if (err) {
                        return console.log(err);
                    }

                    res.json(venue);
                });
            } else {
                res.send('DAT USER IN DER BRUH');
            }
        });
    });

    app.patch('/api/venue/decrement', (req, res) => {
        Venue.findById({
            _id: req.body.venueId
        }, (err, venue) => {
            if (err) {
                return console.log(err);
            }

            if (venue.users.includes(req.body.username)) {
                Venue.findByIdAndUpdate({
                    _id: req.body.venueId,
                }, {
                    $inc: {count: -1},
                    $pull: {users: req.body.username}
                }, {
                    new: true
                }, (err, venue) => {
                    if (err) {
                        return console.log(err);
                    }

                    res.json(venue);
                });
            } else {
                res.send('DAT USER NOT IN DER BRUH');
            }
        });
    });
};