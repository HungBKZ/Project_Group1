// models/voucher.model.js
import mongoose from 'mongoose';

const VoucherSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true, index: true },
  name: { type: String, required: true },
  description: String,
  type: { type: String, enum: ['PERCENT', 'AMOUNT'], required: true },
  value: { type: Number, required: true, min: 0 },          // 10% hoặc 50000
  minSpend: { type: Number, default: 0, min: 0 },
  maxDiscount: { type: Number, default: 0, min: 0 },        // 0 = không giới hạn
  startAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  usageLimit: { type: Number, default: 0, min: 0 },         // 0 = không giới hạn
  usedCount: { type: Number, default: 0, min: 0 },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE', index: true },

  // target audience
  onlyForMember: { type: Boolean, default: false },
  tierRequired: { type: String, enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'ANY'], default: 'ANY' }
}, { timestamps: true });

VoucherSchema.index({ status: 1, startAt: 1, endAt: 1 });
export default mongoose.model('Voucher', VoucherSchema);
