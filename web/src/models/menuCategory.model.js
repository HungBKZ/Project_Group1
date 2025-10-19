// models/menuCategory.model.js
import mongoose from 'mongoose';

const MenuCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('MenuCategory', MenuCategorySchema);
