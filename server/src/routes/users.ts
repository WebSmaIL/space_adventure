import express from 'express'
import { UsersController } from '../controllers/Users'
const router = express.Router()

router.get('/users', UsersController.getUsers)

router.get('/users/:id', UsersController.getUserById)

router.delete('/users/:id', UsersController.deleteUserById)

router.post('/users/', UsersController.addUser);

router.put('/users/', UsersController.updateUser);


export default router