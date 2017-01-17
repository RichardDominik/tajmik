let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
	created: { type: Date, default: Date.now},
	title: {type: String, default: '', trim: true, required: "Please enter a To Do item"},
	creator: {type: String},
	completed: {type: Boolean, default: false}
});

let taskSchema = mongoose.model('Task', schema);
module.exports = taskSchema;