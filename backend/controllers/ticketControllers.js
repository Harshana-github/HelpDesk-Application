import asyncHandler from "express-async-handler";
import Ticket from "../models/ticketModel.js";

// @desc    get ticket
// @route   get /api/get-ticket
// @access Public
const getTicket = asyncHandler(async (req, res) => {

  const tickets = await Ticket.find();
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({tickets});
  
});

// @desc    Add ticket
// @route   POST /api/add-ticket
// @access Public
const addTicket = asyncHandler(async (req, res) => {
  
  const nic = req.body.nic;
  const name = req.body.name;
  const contact = req.body.contact;
  const location = req.body.location;
  const supportDetails = req.body.suportDetails;

  const newTicket = new Ticket({
    nic,
    name,
    contact,
    location,
    supportDetails
  });

  try {
    await newTicket.save();
    res.json(newTicket);
  } catch (err) {
    console.log(err);
  }
});

// @desc    Fetch single ticket
// @route   GET /api/get-ticket/:id
// @access Public
const getTicketById = asyncHandler(async (req, res) => {
  const oneTicket = await Ticket.findById(req.params.id)

  if (oneTicket) {
    res.json(oneTicket)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

export { getTicket, addTicket };
