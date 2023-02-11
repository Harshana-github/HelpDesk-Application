import express from 'express'
import { getTicket, addTicket } from '../controllers/ticketControllers.js'

const router = express.Router()

router.get('/get-ticket', getTicket)
router.post('/add-ticket', addTicket)

export default router 