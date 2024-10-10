const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  targetDate: { type: Date, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Goal', GoalSchema);
