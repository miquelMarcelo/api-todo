const jwt = require("jsonwebtoken")

const getToken = (username) => {
    return jwt.sign({username: username}, process.env.SECRETTOKEN)
}

const validUser = (req, res, next) => {
    const token = req.get("authorization").split(" ")[1]
    const auth = jwt.verify(token, process.env.SECRETTOKEN, function(err, decoded){
        if(err){
            return res.status(401).send({err: "Token invalido"})
        }else {
            req.params.user = decoded.username
            next()
        }
    })
}

module.exports = {getToken, validUser}