const passport = require('passport'),
      Venue = require('../venue/model/venue'),
      request = require('request'),
      FOURSQUARE_CLIENT_ID = process.env.FOURSQUARE_CLIENT_ID,
      FOURSQUARE_CLIENT_SECRET = process.env.FOURSQUARE_CLIENT_SECRET;


module.exports = (app) => {
    /** API ENDPOINT CHECK LIST:
     * --Signup--
     * --Log In--
     * --Add Venue--
     * --Going-- TODO: Remove outer db call. $nin?
     * --Not Going-- TODO: ""^
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

    // Foursquare API "middleman"... call is made on backend to hide API auth info
    app.get('/api/foursquare/:city', (req, res) => {
        request('https://api.foursquare.com/v2/venues/search?client_id=' +
            FOURSQUARE_CLIENT_ID + '&client_secret=' + FOURSQUARE_CLIENT_SECRET +
            '&query=donuts&near=' + req.params.city + '&v=20170501&',
            (err, response, body) => {
                if (err) {
                    res.send(err);
                }

                res.json(body);
        });
    });
};