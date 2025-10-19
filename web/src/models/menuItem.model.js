// models/menuItem.model.js
import mongoose from 'mongoose';

const PriceOptionSchema = new mongoose.Schema({
  label: { type: String, required: true },        // Size S/M/L...
  price: { type: Number, required: true, min: 0 }  // đơn vị: VND
}, { _id: false });

const ToppingOptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0, min: 0 }
}, { _id: false });

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, index: 'text' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuCategory', required: true, index: true },
  description: { type: String, trim: true },
  imageUrl: { type: String },
  basePrice: { type: Number, required: true, min: 0 }, // giá mặc định
  priceOptions: [PriceOptionSchema],                   // size/variant
  toppings: [ToppingOptionSchema],                     // topping có thể chọn
  tags: [{ type: String, index: true }],               // spicy, vegan, bestseller...
  station: { type: String, enum: ['BAR', 'FRY', 'GRILL', 'WOK', 'PASTRY', 'GENERAL'], default: 'GENERAL', index: true },
  available: { type: Boolean, default: true },
  soldOut: { type: Boolean, default: false }
}, { timestamps: true });

MenuItemSchema.index({ name: 'text', tags: 1, station: 1, available: 1 });
export default mongoose.model('MenuItem', MenuItemSchema);
