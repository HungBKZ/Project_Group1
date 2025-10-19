import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json({ ok: true, service: 'swd392-web', time: new Date().toISOString() });
});

export default router;
