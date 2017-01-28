var Event = require('../models/event.js');

module.exports = function(app) {

	// post events to DB
	app.post('/api/events', function(req, res){
		var event = new Event(req.body);

		event.save(function(err){
			if(err){
				return res.status(400).send({
					message: 'error'
				});
			}
			else {
				res.json(event)
			}
		})
	});

	//get events from DB
	app.get('/api/events', function(req, res){
		Event.find({creator: req.headers.authorization}).sort('-created').exec(function(err, events){
			if(err){
				return res.status(400).send({
					message: 'error'
				});
			}
			else {
				res.json(events);
			}
		});
	});

	//get length of events
	app.get('/api/events/length', function(req, res){
		Event.find({creator: req.headers.authorization}).count()
			.exec(function(err, events){
				if(err){
					return res.status(400).send({
						message: 'error'
					});
				} else {
					res.json(events);
				}
			});
	});

	//get length of incompleted events
	app.get('/api/events/incompleted', function(req, res){
		Event.find({creator: req.headers.authorization, completed: false}).count()
			.exec(function(err, events){
				if(err){
					return res.status(400).send({
						message: 'error'
					});
				} else {
					res.json(events);
				}
			});
	});

	//get length of completed events
	app.get('/api/events/completed', function(req, res){
		Event.find({creator: req.headers.authorization, completed: true}).count()
			.exec(function(err, events){
				if(err){
					return res.status(400).send({
						message: 'error'
					});
				} else {
					res.json(events);
				}
			});
	});

	app.get('/api/events/:eventID', function(req, res){
		res.json(req.event);
	});

	app.put('/api/events/:eventID', function(req, res){
		var event = req.event;

		event.title = req.body.title;
		event.comment = req.body.comment;
		event.completed = req.body.completed;
		event.done = req.body.done;

		event.save(function(err){
			if(err){
				return res.status(400).send({
					message: 'error'
				});
			} 
			else {
				res.json(event);
			}
		});
	});

	app.delete('/api/events/:eventID', function(req, res){
		var event = req.event;

		event.remove(function(err){
			if(err){
				return res.status(400).send({
					message: 'error'
				});
			}
			else {
				res.json(event);
			}
		});
	});

	app.param('eventID', function(req, res, next, id){
		Event.findById(id).populate('creator')
			.exec(function(err, event){
				if(err){
					return next(err);
				}
				if(!event){
					return next(new Error('Failed to load event ' + id));
				}

				req.event = event;
          		next();
			});
	});

};