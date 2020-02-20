const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}))

app.use('/api', require("./router"))

const PORT = 8090

app.listen(PORT, () => console.log(`App start listening on http://localhost:${PORT}`))

module.exports = app