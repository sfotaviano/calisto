const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/calistoapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

require('./models/User')
require('./models/Center')

app.use('/api', require('./routes'))

app.listen(3000)
