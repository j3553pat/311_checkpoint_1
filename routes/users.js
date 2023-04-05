const router = express.Router()
const express = require('express')
const usersController = require('/controllers/users')
module.exports = router

router.get('/users', usersController.userList)
router.get('/users/:id', usersController.userId)
router.post('/users', usersController.createUser)
router.put('/users/:id', usersController.userUpdate)
router.delete('/users/:id', usersController.deleteUserId)