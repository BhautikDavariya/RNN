const { getAllUser, createUser, login } = require('../controller/userController')
const authenticate = require('../midalware/authMidelware')

const userRouter = require('express').Router()


userRouter.get('/users', authenticate, getAllUser)
userRouter.post('/users-create', createUser)
userRouter.post('/users-login', login)

module.exports = userRouter