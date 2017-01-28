var Task = require('../models/task.js');

module.exports = function(app) {
	// post tasks to DB
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

	//get tasks from DB
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

	//get length of tasks
	app.get('/api/tasks/length', function(req, res){
		Task.find({creator: req.headers.authorization}).count()
			.exec(function(err, tasks){
				if(err){
					return res.status(400).send({
						message: 'error'
					});
				} else {
					res.json(tasks);
				}
			});
	});

	//get length of incompleted tasks
	app.get('/api/tasks/incompleted', function(req, res){
		Task.find({creator: req.headers.authorization, completed: false}).count()
			.exec(function(err, tasks){
				if(err){
					return res.status(400).send({
						message: 'error'
					});
				} else {
					res.json(tasks);
				}
			});
	});

	//get length of completed tasks
	app.get('/api/tasks/completed', function(req, res){
		Task.find({creator: req.headers.authorization, completed: true}).count()
			.exec(function(err, tasks){
				if(err){
					return res.status(400).send({
						message: 'error'
					});
				} else {
					res.json(tasks);
				}
			});
	});

};