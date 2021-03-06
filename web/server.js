// node_modules
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let morgan = require('morgan');
let mongoose = require('mongoose');
let passport = require('passport');
let jwt = require('jwt-simple');
let validator = require('validator');
let assert = require('assert');
let  jwtDecode = require('jwt-decode');

// database config
let config = require('./config/database');
// passport config
require('./config/passport')(passport);

// use X-HTTP-Method-Override, json, urlencoded
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(morgan('dev'));
app.use(passport.initialize());

// connection to database
mongoose.connect(config.database);
let db = mongoose.connection;

// User schema 
let User = require('./models/user');


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Connected to MongoDB');
   
    //Profiles
    require('./routes/profiles.server.routes.js')(app);
    //Tasks
    require('./routes/tasks.server.routes.js')(app);
    //Event
    require('./routes/event.server.routes.js')(app);
    //Users count 
    require('./routes/users.server.routes.js')(app);
    //AUTHENTICATION
    // create a new user account
    app.post('/api/signup', (req, res) => {
        if (!req.body.email || !req.body.password) {
            res.json({success: false, msg: 'Please pass email and password.'});
        } else {
            // check validate email
            if(!validator.isEmail(req.body.email)){
                return res.json({success: false, msg: 'Your email is not valid.'});
            }
            // check length of password
            if(!validator.isLength(req.body.password, {min:6, max: 16})){
                return res.json({success: false, msg: 'Your password must be between 6 and 16 characters.'});
            }
            // validator for password
            if(!validator.isAlphanumeric(req.body.password)){
                return res.json({success: false, msg: 'Your password must contain only letters and numbers.'});
            }

            // create user in database
            let newUser = new User({
              email: req.body.email,
              password: req.body.password,
            });
            
            // save the user to database
            newUser.save((err) => {
              if (err) {
                return res.json({success: false, msg: 'Email already exists.'});
              }
              res.json({success: true, msg: 'Successful created new user.'});
            });
          }
    });

    app.post('/api/signin', (req, res) =>{
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if(err) throw err;
            // if user don't exist return error
            if(!user){
                res.json({success: false, msg: 'Signin failed, User not found.'});
            }else{
                // compare password 
                user.comparePassword(req.body.password, (err, isMatch) => {
                    if(isMatch && !err){
                        let token = jwt.encode(user, config.secret);
                        let decoded = jwtDecode(token);
                        console.log(decoded);
                        exports.decoded = decoded;
                        res.json({success: true, token: 'JWT ' + token});
                    }else{
                        res.json({success: false, msg: 'Signin failed, wrong password'});
                    }
                });
            }
        });
    });
});

// app listening on port 3000
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
