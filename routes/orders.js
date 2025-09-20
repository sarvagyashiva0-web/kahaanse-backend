const { verifyAdmin } = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // We'll create this next

// Get all orders (admin only)
router.get('/', verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;