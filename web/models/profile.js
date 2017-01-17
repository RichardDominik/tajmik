let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
	firstName: {type: String, default: '', trim: true },
	lastName: {type: String, default: '', trim: true },
	city: {type: String, default: '', trim: true },
	country: {type: String, default: '', trim: true },
	creator: {type: String}
});

let profileSchema = mongoose.model('Profile', schema);
module.exports = profileSchema;