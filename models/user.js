const mongoose = require('mongoose');
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
  passoword:String,
  }
});

module.exports = mongoose.model('user');
