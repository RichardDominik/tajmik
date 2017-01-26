let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
	created: {type: Date, default: Date.now},
	done: {type: String},
	title: {type: String, trim: true, required: "Please enter a Event"},
	comment: {type: String},
	creator: {type: String},
	completed: {type: Boolean, default: false}
});

let eventSchema = mongoose.model('Event', schema);
module.exports = eventSchema;