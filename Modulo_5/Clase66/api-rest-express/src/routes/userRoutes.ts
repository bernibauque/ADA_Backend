import { Router } from "express";
import {createUser} from '../controllers/userController';
import validateRequest from '../middlewares/validateRequest'
import {userSchema} from '../models/userModel'

const router = Router()

router.post('/', validateRequest(userSchema), createUser)

export default router