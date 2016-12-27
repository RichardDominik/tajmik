let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
	firstName: {type: String},
	lastName : {type: String},
	city: {type: String},
	country: {type: String}
});

let profileSchema = mongoose.model('Profile', schema);
module.exports = profileSchema;