const express = require('express')
const router = express.Router()
const { create, getAllTodo, DeleteOneTodo, UpdateOneTodo } = require('./../controlers/Todos.js')
const { validUser } = require('./../middleware/jwt.js')

router.get('/', getAllTodo)

router.post('/create', create)

router.delete('/delete/:id', validUser, DeleteOneTodo)

router.put('/update/:id', validUser, UpdateOneTodo)

module.exports = router
