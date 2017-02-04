var User = require('../models/user.js');

module.exports = function(app) {

	// get users count
	app.get('/api/users/count', function(req, res){
		User.count().exec(function(err, users){
			if(err){
				return res.status(400),send({
					message: 'error'
				});
			} else {
				res.json(users);
			}
		});
	});

};