import asyncHandler from "express-async-handler";
import Ticket from "../models/ticketModel.js";

// @desc    get ticket
// @route   get /api/get-ticket
// @access Public
const getTicket = asyncHandler(async (req, res) => {

  const ticket = await Ticket.find();
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json(ticket);
  
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
    res.json('ticket added successfully');
  } catch (err) {
    console.log(err);
  }
});

export { getTicket, addTicket };
