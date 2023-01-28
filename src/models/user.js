const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  displayName: String,
  username: String,
  profileUrl: String,
  emails: { type : Array , "default" : [] },
  photos: { type : Array , "default" : [] },
  provider: String,
  _raw: String,
  _json: Object
}, {timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;