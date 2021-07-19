const Router = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const router = new Router()

const userController = require('../controller/user.controller')
const authController = require('../controller/auth.controller')

router.post('/user', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

router.get('/todos', authMiddleware, userController.getTodos)
router.get('/settodos',  authMiddleware, userController.setTodo)

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/check', authMiddleware, authController.check)

module.exports = router
