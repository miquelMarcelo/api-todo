const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
// const User = require('./Users.js')

const TodoSchema = new Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false
  },
  users: String
  // Users: [User.schema]
})

TodoSchema.plugin(AutoIncrement, { inc_field: 'id' })
module.exports = mongoose.model('Todo', TodoSchema)
