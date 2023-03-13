const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  address: {
    street: String,
    city: String,
    zipcode: String,
    country: String
  }
})

module.exports = mongoose.model('User', UserSchema)
