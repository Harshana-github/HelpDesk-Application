import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import customerRoute from './routes/customerRoute.js'

const app = express()
dotenv.config()  

connectDB()

app.use(express.json())

app.use('/api', customerRoute)


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
