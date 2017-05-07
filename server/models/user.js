"use strict";

const mongoose = require( 'mongoose');
const crypto = require( 'crypto');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true, index: true},
  hash: String,
  salt: String,
});

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.verifyPassword = function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

  return this.hash === hash;
};

module.exports = mongoose.model("User", userSchema);
