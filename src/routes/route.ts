import { Router } from 'express'
import controller from '../controllers/UserController'

const router = Router()

router.get('/users', controller.showUser)
router.get('/find/:id', controller.getUserById)
router.post('/create', controller.createUser)
router.put('/update/:id', controller.updateUser)
router.delete('/delete/:id', controller.deleteUser)

export default router
