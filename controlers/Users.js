const Users = require("../models/Users")
const bcrypt = require("bcrypt")
const {getToken} = require("./../middleware/jwt.js")

const register =  async (req, res) => {
    const { body } = req
    const { username, password } = body
    const usernamExist = await Users.findOne({username})

    if (usernamExist) return res.status(400).send({message: "username exist"})
    
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = { ... body, password : hashPassword}
    await Users.create(newUser)
    res.status(201).send({message: "usuario creado correctamente"})
}

const login =  async (req, res) => {
    const { body } = req
    const { username, password } = body

    const user = await Users.findOne({username},{_id: 0,__v:0})
    const passwordCorrect = user === null 
    ? false
    : await bcrypt.compare(password, user.password)
    if (!passwordCorrect || !user ) return res.status(401).send({message: "usuario o contraseña invalido"})
    let token = getToken(user.username)
    const message = {
        username: user.username,
        token: token
    }
    
    res.status(201).send(message)
}

module.exports = { register, login }