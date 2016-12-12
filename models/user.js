const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

var  Schema = mongoose.Schema;

var validateEmail = (email) => {
  return(/\$+@\$+\.$+/).test(email);
};

var userSchema = new Schema({
  email: {
    type:String,
    unique:true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please enter a valid email']
  },
  passoword: {
    type:String,
  }
});

userSchema.pre('save', function(next) {
  var user = this;
  if(user.isNew || user.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {retrun next(err) }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if(err) {return next (err) }
        user.password = hash;
        next();
      });
      });
  } else {
    next();
  }
});

module.exports = mongoose.model('user', userSchema);
