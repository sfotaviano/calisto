const mongoose = require('mongoose')

const Center = mongoose.model('Center')

module.exports = {
  async index (req, res) {
    const center = await Center.find()

    return res.json(center)
  },
  async find (req, res) {
    const center = await Center.findById(req.params.id)

    return res.json(center)
  },
  async create (req, res) {
    const center = await Center.create(req.body)

    return res.json(center)
  },
  async update (req, res) {
    const center = await Center.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(center)
  },
  async delete (req, res) {
    await Center.findByIdAndRemove(req.params.id)

    return res.send()
  }
}
