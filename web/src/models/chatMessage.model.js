// models/chatMessage.model.js
import mongoose from 'mongoose';

const ChatMessageSchema = new mongoose.Schema({
  session: { type: mongoose.Schema.Types.ObjectId, ref: 'DiningSession', required: true, index: true },
  fromRole: { type: String, enum: ['CUSTOMER', 'WAITER', 'MANAGER'], required: true, index: true },
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // null nếu khách vãng lai
  content: { type: String, required: true, trim: true },
  attachments: [{ url: String, name: String }],
  seenByStaff: { type: Boolean, default: false, index: true }
}, { timestamps: true });

ChatMessageSchema.index({ session: 1, createdAt: 1 });
export default mongoose.model('ChatMessage', ChatMessageSchema);
