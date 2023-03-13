const Todo = require('../models/Todos.js')
const User = require('../models/Users.js')

const create = async (req, res) => {
  const name = req.body.user
  const userFinded = await User.find({ username: name })
  if (userFinded.length === 0) {
    res.status(400).send({ message: 'No existe usuario' })
  } else {
    const newTodo = { ...req.body, users: userFinded[0].name }
    await Todo.create(newTodo)
    res.status(201).send({ message: 'Creado correctamente' })
  }
}

const getAllTodo = async (req, res) => {
  let sort = {}
  if (req.query !== {} && (req.query.sortDir === 'asc' || req.query.sortDir === 'desc')) sort = { [req.query.sortBy]: req.query.sortDir }
  const allTodo = await Todo.find({}, { _id: 0, __v: 0 }).sort(sort)
  res.status(200).send(allTodo)
}

const DeleteOneTodo = async (req, res) => {
  const todoDeleted = await Todo.findOneAndDelete({ id: req.params.id, users: req.params.user })
  if (todoDeleted === null) res.status(204).send({ message: 'No existe todo' })
  else res.status(200).send({ message: 'Borrados Correctamente' })
}

const UpdateOneTodo = async (req, res) => {
  const user = req.params.user
  const filter = { id: req.params.id, users: user }
  const update = req.body
  const todoUpdated = await Todo.findOneAndUpdate(filter, update)
  if (todoUpdated === null) res.status(204).send({ message: 'No existe Todo' })
  else res.status(200).send({ message: 'Actualizado Correctamente' })
}

module.exports = { create, getAllTodo, DeleteOneTodo, UpdateOneTodo }
