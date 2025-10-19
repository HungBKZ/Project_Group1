// models/kitchenTicket.model.js
import mongoose from 'mongoose';

const KitchenTicketSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true, index: true },
  orderItemIndex: { type: Number, required: true }, // trỏ tới items[index] trong Order
  station: { type: String, enum: ['BAR', 'FRY', 'GRILL', 'WOK', 'PASTRY', 'GENERAL'], default: 'GENERAL', index: true },
  priority: { type: String, enum: ['NORMAL', 'RUSH'], default: 'NORMAL', index: true },
  status: { type: String, enum: ['QUEUED', 'COOKING', 'READY', 'RECALLED', 'CANCELLED'], default: 'QUEUED', index: true },
  etaMinutes: { type: Number, min: 0 },
  notes: String,

  acceptedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // KITCHEN user
  readyAt: { type: Date }
}, { timestamps: true });

KitchenTicketSchema.index({ station: 1, status: 1, priority: 1, createdAt: 1 });
export default mongoose.model('KitchenTicket', KitchenTicketSchema);
