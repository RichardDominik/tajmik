var Task = require('../models/task.js');

module.exports = function(app) {
	app.post('/api/tasks', function(req, res){
		var task = new Task(req.body);

		task.save(function(err){
			if(err){
				return res.status(400).send({
					message: 'error'
				});
			}
			else {
				res.json(task)
			}
		})
	});

	app.get('/api/tasks', function(req, res){
		Task.find({creator: req.headers.authorization}).exec(function(err, tasks){
			if(err){
				return res.status(400).send({
					message: 'error'
				});
			}
			else {
				res.json(tasks);
			}
		});
	});

};