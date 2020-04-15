const express = require('express')

const routes = express.Router()

const CenterSchema = require('./models/Center')
const UserSchema = require('./models/User')

// Rotas /login, /user, /home, /center

// Criar centro
routes.post('/center', CenterSchema.create)

// Atualizar centro
routes.put('/center', CenterSchema.update)

// Deletar um centro
routes.delete('/center/:id', CenterSchema.delete)

// Listar centros
routes.get('/center', CenterSchema.index)

// Criar usuário
routes.post('/user', UserSchema.create)

// Listar usuários
routes.get('/user', UserSchema.index)

// Deletar usuário
routes.delete('/user/:id', UserSchema.delete)

module.exports = routes
