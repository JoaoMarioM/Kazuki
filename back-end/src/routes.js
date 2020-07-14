const express = require('express')

const routes = express.Router()

const clientController = require('./controllers/clientController')
const employeeController = require('./controllers/employeeController')
const contractController = require('./controllers/contractController')
const sessionController = require('./controllers/sessionController')
const profileContractController = require('./controllers/profileContractController')

routes.post('/sessions', sessionController.create)

routes.get('/clientes', clientController.index)
routes.post('/clientes', clientController.create)
routes.delete('/clientes/:id', clientController.delete)
routes.put('/clientes/:id', clientController.update)

routes.get('/funcionario', employeeController.index)
routes.post('/funcionario', employeeController.create)
routes.delete('/funcionario/:id', employeeController.delete)

routes.get('/contratos', contractController.index)
routes.post('/contratos', contractController.create)
routes.delete('/contratos/:id', contractController.delete)

routes.get('/profileContract', profileContractController.index)

module.exports = routes

