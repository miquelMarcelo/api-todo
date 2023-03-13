require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/mongo.js')
const users = require('./routes/user.js')
const todos = require('./routes/todos.js')

const app = express()
app.use(express.json())

app.use('/todos', todos)

app.use('/users', users)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Aplicacion en marcha en el puerto ${port}`)
})

dbConnect()
