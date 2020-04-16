const express = require('express')

const routes = express.Router()

const CenterController = require('./controllers/CenterController')
const UserController = require('./controllers/UserController')

// Rotas /login, /users, /home, /centers

routes.post('/centers', CenterController.create)
routes.put('/centers/:id', CenterController.update)
routes.get('/centers', CenterController.index)
routes.get('/centers/:id', CenterController.find)
routes.delete('/centers/:id', CenterController.delete)

routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.find)
routes.delete('/users/:id', UserController.delete)

module.exports = routes
