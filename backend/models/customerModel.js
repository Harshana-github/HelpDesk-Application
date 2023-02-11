import mongoose from 'mongoose'

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    location: {
        type: String,
        required: true,
    },
    nic: {
      type: Number,
      required: true,
    }
  } 
)

const Customer = mongoose.model('Customer', customerSchema)

export default Customer
