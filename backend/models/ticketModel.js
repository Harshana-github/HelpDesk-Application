import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  techPersonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TechPerson",
    required: true,
  },
  supportDetails: {
    type: String,
    required: true,
  },
  progressStatus: {
    type: String,
    default: 'Opened',
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
