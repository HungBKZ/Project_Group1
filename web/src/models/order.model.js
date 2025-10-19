// models/order.model.js
import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  nameSnapshot: { type: String, required: true },      // lưu tên tại thời điểm đặt
  priceSnapshot: { type: Number, required: true, min: 0 },
  sizeLabel: { type: String },                         // nếu có chọn size
  toppings: [{
    name: String,
    price: { type: Number, default: 0, min: 0 }
  }],
  quantity: { type: Number, default: 1, min: 1 },
  note: { type: String, trim: true },
  status: {
    type: String,
    enum: ['NEW', 'IN_KITCHEN', 'READY', 'SERVED', 'CANCELLED'],
    default: 'NEW',
    index: true
  },
  kitchenTicket: { type: mongoose.Schema.Types.ObjectId, ref: 'KitchenTicket' }
}, { _id: false, timestamps: true });

const PaymentSchema = new mongoose.Schema({
  method: { type: String, enum: ['CASH', 'CARD', 'EWALLET', 'BANK_QR'], required: true },
  amount: { type: Number, required: true, min: 0 },
  providerTxnId: { type: String },
  status: { type: String, enum: ['PENDING', 'SUCCESS', 'FAILED'], default: 'PENDING' },
  paidAt: { type: Date }
}, { _id: false });

const OrderSchema = new mongoose.Schema({
  code: { type: String, unique: true, index: true }, // ví dụ: ORD-2025-000123
  session: { type: mongoose.Schema.Types.ObjectId, ref: 'DiningSession', required: true, index: true },
  table:   { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true, index: true },
  member:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional
  items: { type: [OrderItemSchema], default: [] },

  // tổng tiền
  subTotal: { type: Number, required: true, min: 0, default: 0 },
  discountTotal: { type: Number, required: true, min: 0, default: 0 },
  taxTotal: { type: Number, required: true, min: 0, default: 0 },
  serviceFee: { type: Number, required: true, min: 0, default: 0 },
  grandTotal: { type: Number, required: true, min: 0, default: 0 },

  // trạng thái
  status: { type: String, enum: ['PLACED', 'CONFIRMED', 'PREPARING', 'READY', 'SERVING', 'COMPLETED', 'CANCELLED'], default: 'PLACED', index: true },

  // khuyến mãi & điểm
  appliedVouchers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Voucher' }],
  pointsEarned: { type: Number, default: 0, min: 0 },
  pointsRedeemed: { type: Number, default: 0, min: 0 },

  // thanh toán
  payments: { type: [PaymentSchema], default: [] },

  // nhật ký & audit
  placedChannel: { type: String, enum: ['QR', 'WAITER_APP', 'WEB_ADMIN'], default: 'QR' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // staff tạo hộ
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

OrderSchema.index({ status: 1, createdAt: -1 });
OrderSchema.index({ table: 1, 'items.status': 1 });

export default mongoose.model('Order', OrderSchema);
