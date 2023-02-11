import asyncHandler from 'express-async-handler'
import Customer from '../models/customerModel.js'

// @desc    Add customer
// @route   POST /api/add-customer
// @access Public
const getCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.find();
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(customer);
  }); 


export { getCustomer }