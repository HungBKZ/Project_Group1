// models/user.model.js
import mongoose from 'mongoose';

const Roles = ['MEMBER', 'WAITER', 'KITCHEN', 'MANAGER', 'ADMIN']; // khách vãng lai không đăng ký sẽ không có user record
const Tiers = ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'];

const UserSchema = new mongoose.Schema({
  fullName: { type: String, trim: true },
  email: { type: String, trim: true, lowercase: true, index: true },
  phone: { type: String, trim: true, index: true },
  passwordHash: { type: String },           // bcrypt hash (đối với MEMBER & staff)
  role: { type: String, enum: Roles, required: true, index: true },
  status: { type: String, enum: ['ACTIVE', 'SUSPENDED'], default: 'ACTIVE' },

  // MEMBER profile
  allergies: [{ type: String, trim: true }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
  points: { type: Number, default: 0, min: 0 },
  tier: { type: String, enum: Tiers, default: 'BRONZE' },

  // staff meta
  staffCode: { type: String, index: true },
  lastLoginAt: { type: Date },

  // audit
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

UserSchema.index({ role: 1, status: 1 });
export default mongoose.model('User', UserSchema);
