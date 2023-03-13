const mongoose = require('mongoose')
const uri = process.env.DB_URI
mongoose.set('strictQuery', true)

const dbConnect = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, res) => {
    if (!err) {
      console.log('**CONEXION CORRECTA**')
    } else {
      console.log(err)
      console.log('**ERROR en la CONEXION **')
    }
  })
}

module.exports = dbConnect
