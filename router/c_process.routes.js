const Router = require('express')
const c_process = require('../controller/c_process.controller')
const authMiddleware = require('../middleware/auth.middleware')
const router = new Router()

router.post('/declared-income', c_process.createDeclaredIncome)
router.get('/declared-income', c_process.getDeclaredIncome)
router.put('/declared-income/:id', c_process.updateDeclaredIncome)
router.delete('/declared-income/:id', c_process.deleteDeclaredIncome)

router.post('/declared-income-confirmation', c_process.createDeclaredIncomeConfirmation)
router.get('/declared-income-confirmation', c_process.getDeclaredIncomeConfirmation)
router.put('/declared-income-confirmation/:id', c_process.updateDeclaredIncomeConfirmation)
router.delete('/declared-income-confirmation/:id', c_process.deleteDeclaredIncomeConfirmation)

router.post('/enterpreneur-declared-income', c_process.createEnterpreneurDeclaredIncome)
router.get('/enterpreneur-declared-income', c_process.getEnterpreneurDeclaredIncome)
router.put('/enterpreneur-declared-income/:id', c_process.updateEnterpreneurDeclaredIncome)
router.delete('/enterpreneur-declared-income/:id', c_process.deleteEnterpreneurDeclaredIncome)

router.post('/paying-taxes', c_process.createPayingTaxes)
router.get('/paying-taxes', c_process.getPayingTaxes)
router.put('/paying-taxes/:id', c_process.updatePayingTaxes)
router.delete('/paying-taxes/:id', c_process.deletePayingTaxes)

router.post('/paying-taxes-confirmation', c_process.createPayingTaxesConfirmation)
router.get('/paying-taxes-confirmation', c_process.getPayingTaxesConfirmation)
router.put('/paying-taxes-confirmation/:id', c_process.updatePayingTaxesConfirmation)
router.delete('/paying-taxes-confirmation/:id', c_process.deletePayingTaxesConfirmation)

router.post('/status-tax-reporting', c_process.createStatusTax)
router.get('/status-tax-reporting', c_process.getStatusTax)
router.put('/status-tax-reporting/:id', c_process.updateStatusTax)
router.delete('/status-tax-reporting/:id', c_process.deleteStatusTax)

module.exports = router
