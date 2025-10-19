// models/diningSession.model.js
import mongoose from 'mongoose';

const DiningSessionSchema = new mongoose.Schema({
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true, index: true },
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // có thể null nếu khách vãng lai
  status: { type: String, enum: ['OPEN', 'PAYING', 'CLOSED'], default: 'OPEN', index: true },
  guests: { type: Number, default: 1, min: 1 },
  openedAt: { type: Date, default: Date.now },
  closedAt: { type: Date },
  notes: String
}, { timestamps: true });

DiningSessionSchema.index({ table: 1, status: 1, openedAt: -1 });
export default mongoose.model('DiningSession', DiningSessionSchema);
