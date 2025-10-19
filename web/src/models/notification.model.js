// models/notification.model.js
import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  roleTarget: { type: String, enum: ['WAITER', 'KITCHEN', 'MANAGER', 'MEMBER', 'ALL'], default: 'ALL', index: true },
  type: { type: String, enum: ['ORDER_PLACED', 'ORDER_READY', 'CHAT', 'SYSTEM'], required: true },
  title: String,
  body: String,
  data: mongoose.Schema.Types.Mixed,
  readAt: { type: Date }
}, { timestamps: true });

NotificationSchema.index({ roleTarget: 1, createdAt: -1 });
export default mongoose.model('Notification', NotificationSchema);
