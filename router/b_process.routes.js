const Router = require('express')
const b_process = require('../controller/b_process.controller')
const authMiddleware = require('../middleware/auth.middleware')
const router = new Router()

router.post('/buyer', b_process.createBuyer)
router.get('/buyer', b_process.getBuyer)
router.put('/buyer/:id', b_process.updateBuyer)
router.delete('/buyer/:id', b_process.deleteBuyer)

router.post('/esf-eavr', b_process.createEsfEavr)
router.get('/esf-eavr', b_process.getEsfEavr)
router.put('/esf-eavr/:id', b_process.updateEsfEavr)
router.delete('/esf-eavr/:id', b_process.deleteEsfEavr)

router.post('/seller', b_process.createSeller)
router.get('/seller', b_process.getSeller)
router.put('/seller/:id', b_process.updateSeller)
router.delete('/seller/:id', b_process.deleteSeller)

router.post('/status', b_process.createStatus)
router.get('/status', b_process.getStatus)
router.put('/status/:id', b_process.updateStatus)
router.delete('/status/:id', b_process.deleteStatus)

module.exports = router
