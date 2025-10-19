import { Router } from 'express';
import MenuItem from '../models/menuItem.model.js';
import MenuCategory from '../models/menuCategory.model.js';
const router = Router();

// GET /api/menu/categories
router.get('/categories', async (req, res, next) => {
  try {
    const cats = await MenuCategory.find().sort({ order: 1 });
    res.json(cats);
  } catch (e) { next(e); }
});

// GET /api/menu/items?category=slug
router.get('/items', async (req, res, next) => {
  try {
    const { category } = req.query;
    let filter = { available: true, soldOut: { $ne: true } };
    if (category) {
      const cat = await MenuCategory.findOne({ slug: category });
      if (cat) filter.category = cat._id; else return res.json([]);
    }
    const items = await MenuItem.find(filter).limit(100);
    res.json(items);
  } catch (e) { next(e); }
});

export default router;
