var Profile = require('../models/profile.js');

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

	app.get('api/profile', function(req, res){
		Profile.find({creator: decoded._id}).exec(function(err, profile){
 			if(err) {
              return res.status(400).send({
                message: 'eror'
              });
            }
            else {
              res.json(profile);
            }
		});
	});
};