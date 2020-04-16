const mongoose = require('mongoose')

const CenterSchema = new mongoose.Schema({
  centerId: {
    type: String,
    required: true
  },
  name: {
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
  address: {
    type: String,
    required: true
  },
  centerType: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  centerAdmin: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Center', CenterSchema)
