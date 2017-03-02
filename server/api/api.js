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

    // Signup and login routes generate JSON Web Tokens to be used for authorization
    app.post('/api/signup', passport.authenticate('signup'), (req, res) => {
        res.json(req.user.generateJwt(req.user.username, req.user._id));
    });

    app.post('/api/login', passport.authenticate('login'), (req, res) => {
        res.json(req.user.generateJwt(req.user.username, req.user._id));
    });

    // Checks for a Venue in the db by ID; if none exists, adds it to db
    // Only venue ID's, count, and users who are going are tracked per Foursquare terms
    app.post('/api/venue/add', (req, res) => {
        console.log(req.body.venueId);
        Venue.findById({
            _id: req.body.venueId
        }, (err, venue) => {
            if (err) {
                return console.log(err);
            }
            if (venue) {
                res.json(venue);
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

    // Updates a Venue's count and users property when someone indicates they are going
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

    // Updates a Venue's count and user property when someone indicates they are not going anymore
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

    // Foursquare API "middleman". Makes call to Foursquare API to retrieve venues
    // and returns them as a response to the front-end. This keeps API credentials out
    // of the front-end code and allows use of env variables for security
    app.get('/api/foursquare/:city', (req, res) => {
        // API call to Foursquare. Returns it to front-end as response
        request('https://api.foursquare.com/v2/venues/search?client_id=' +
            FOURSQUARE_CLIENT_ID + '&client_secret=' + FOURSQUARE_CLIENT_SECRET +
            '&query=coffee&near=' + req.params.city + '&v=20170501&',
            (err, response, body) => {
                if (err) {
                    console.log(err);
                    res.send(err);
                }

                res.json(JSON.parse(body).response.venues);
        });
    });
};