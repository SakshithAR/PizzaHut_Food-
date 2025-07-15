const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// GET all food items (latest first)
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find().sort({ createdAt: -1 });
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch foods' });
  }
});

// POST new food item
router.post('/', async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const newFood = new Food({ name, description, price, image });
    await newFood.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add food' });
  }
});

// ✅ DELETE food item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);
    if (!deletedFood) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.json({ message: 'Food item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete food' });
  }
});

module.exports = router;
                
