const mongoose = require('mongoose')

const CenterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  centerId: {
    type: String,
    required: true
  },
  cnpj: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  typeCenter: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  assistente: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('User', CenterSchema)
