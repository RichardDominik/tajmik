let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;

let User = require('../models/user');
let config = require('../config/database');

module.exports = (passport) => {
	let options = {};
	options.jwtFromRequest = ExtractJwt.fromAuthHeader();
	options.secretOrKey = config.secret;
  	passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    User.findOne({id: jwt_payload.id}, (err, user) => {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
}
