let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcryptjs');

let schema = new Schema({
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true}
});

schema.pre('save', function(next){
	var user = this;
	if(this.isModified('password') || this.isNew){
		bcrypt.genSalt(10, function(err, salt){
			if(err){
				return next(err);
			}
			bcrypt.hash(user.password, salt, function(err, hash){
				if(err){
					return next(err);
				}
				user.password = hash;
				next();
			});
		});
	}else{
		return next();
	}
});

schema.methods.comparePassword = function(passw, cb) {
	bcrypt.compare(passw, this.password, function(err, isMatch) {
		if(err){
			return cb(err);
		}
		cb(null, isMatch);
	});
};

let userSchema = mongoose.model('User', schema);
module.exports = userSchema;
