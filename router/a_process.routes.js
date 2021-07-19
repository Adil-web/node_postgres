const Router = require('express')
const a_process = require('./../controller/a_process.controller')
const authMiddleware = require('../middleware/auth.middleware')
const router = new Router()

// router.get('/get-a-client',  authMiddleware, a_process.createClientA)
router.get('/client', a_process.getClient)
router.post('/client', a_process.createClient)
router.put('/client/:id', a_process.updateClient)
router.delete('/client/:id', a_process.deleteClient)

router.get('/disconnecting-client', a_process.getDisconnectingClient)
router.post('/disconnecting-client', a_process.createDisconnectingClient)
router.put('/disconnecting-client/:id', a_process.updateDisconnectingClient)
router.delete('/disconnecting-client/:id', a_process.deleteDisconnectingClient)

router.get('/client-info', a_process.getClientInfo)
router.post('/client-info', a_process.createClientInfo)
router.put('/client-info/:id', a_process.updateClientInfo)
router.delete('/client-info/:id', a_process.deleteClientInfo)

module.exports = router
