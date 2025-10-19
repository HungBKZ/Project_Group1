// models/loyaltyTxn.model.js
import mongoose from 'mongoose';

const LoyaltyTxnSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  type: { type: String, enum: ['EARN', 'REDEEM', 'ADJUST'], required: true },
  points: { type: Number, required: true },
  note: String
}, { timestamps: true });

LoyaltyTxnSchema.index({ member: 1, createdAt: -1 });
export default mongoose.model('LoyaltyTxn', LoyaltyTxnSchema);
