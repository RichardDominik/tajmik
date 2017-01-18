var Profile = require('../models/profile.js');
var decoded = require ('../server.js');

if(decoded.decoded !== undefined){
	console.log(decoded.decoded);
}

module.exports = function(app) {
	app.post('/api/profile',  function(req, res){
		var profile = new Profile(req.body);

		profile.save(function(err){
			if(err) {
				return res.status(400).send({
					message: 'Error in database'
				});
			}
			else {
				res.json(profile);
			}
		});
	});

	app.get('/api/profile', function(req, res){
		Profile.find({creator: req.body}).exec(function(err, profile){
 			if(err) {
              return res.status(400).send({
                message: 'error'
              });
            }
            else {
              res.json(profile);
            }
		});
	});
};