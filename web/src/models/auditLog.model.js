// models/auditLog.model.js
import mongoose from 'mongoose';

const AuditLogSchema = new mongoose.Schema({
  actor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  actorRole: { type: String, enum: ['MEMBER', 'WAITER', 'KITCHEN', 'MANAGER', 'ADMIN'] },
  action: { type: String, required: true }, // e.g., ORDER_STATUS_CHANGED
  entity: {
    type: { type: String },                  // 'Order', 'MenuItem', ...
    id: { type: mongoose.Schema.Types.ObjectId }
  },
  meta: mongoose.Schema.Types.Mixed,         // lưu prompt AI, AI output if needed
  ip: String,
  userAgent: String
}, { timestamps: true });

AuditLogSchema.index({ action: 1, createdAt: -1 });
export default mongoose.model('AuditLog', AuditLogSchema);
