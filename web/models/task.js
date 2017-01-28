let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
	title: {type: String, trim: true, required: "Please enter a Task"},
	creator: {type: String},
	completed: {type: Boolean, default: false}
});

let taskSchema = mongoose.model('Task', schema);
module.exports = taskSchema;