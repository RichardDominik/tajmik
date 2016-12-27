let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
	text: {type: String}
});

let taskSchema = mongoose.model('Task', schema);
module.exports = taskSchema;