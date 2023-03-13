const express = require('express')
const router = express.Router()
const { register, login } = require('./../controlers/Users.js')

router.post('/register', register)

router.post('/login', login)

module.exports = router
