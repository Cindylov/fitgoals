const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');
const GoalsController = require('../controllers/goalsController');

router.post('/add', async (req, res) => {
  try {
    const { title, description, targetDate } = req.body;
    const newGoal = new Goal({ title, description, targetDate });
    await newGoal.save();
    res.json(newGoal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete('/:id', GoalsController.deleteGoal);

module.exports = router;
