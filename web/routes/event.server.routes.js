var Event = require('../models/event.js');
//let mongo = require('mongodb');
//let fs = require('fs');
//let Grid = require('gridfs-stream');

module.exports = function(app) {

	//let gfs = Grid(db, mongo);

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

	// update event by eventID
	app.post('/api/event/update', function(req, res){
		var items = {
			completed: req.body.completed
		};

		console.log(items);

		var id = req.headers.eventid;

		console.log(id);

		Event.update({_id: id}, {$set: items},function(err, result){
			if(err){
				res.json(err);
			} 
			if(result){
				res.json(result);
			}
		})
	});

	// remove task by taskID 
	app.post('/api/event/remove', function(req, res){
		var id = req.headers.eventid;

		Event.remove({_id: id}, function(err, result){
			if(err){
				res.json(err);
			}
			if(result){
				res.json(result);
			}
		})
	});

};