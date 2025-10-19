// models/table.model.js
import mongoose from 'mongoose';

const TableSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true }, // VD: T01, A12
  capacity: { type: Number, default: 4 },
  status: { type: String, enum: ['EMPTY', 'OCCUPIED', 'NEEDS_CLEANING', 'RESERVED'], default: 'EMPTY', index: true },
  locationNote: { type: String },
  qrSlug: { type: String, required: true, unique: true }, // để tạo link QR: /qr/:qrSlug
  currentSession: { type: mongoose.Schema.Types.ObjectId, ref: 'DiningSession' }
}, { timestamps: true });

export default mongoose.model('Table', TableSchema);
