import express from 'express'
import { getCustomer } from '../controllers/customerControllers.js'

const router = express.Router()

router.get('/customer', getCustomer)

export default router 