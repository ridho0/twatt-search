const express = require('express')
const bodyParser = require('body-parser')

const index = require('./routes/index')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', index)

app.listen(3000)

module.exports = app
