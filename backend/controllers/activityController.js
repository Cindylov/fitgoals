const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addActivity = async (req, res) => {
  const { date, water, exercise } = req.body;
  const newActivity = new Activity({ date, water, exercise });
  try {
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteActivity = async (req, res) => {
  try {
      const { id } = req.params; 
      const deletedActivity = await Activity.findByIdAndDelete(id); 
      if (!deletedActivity) {
          return res.status(404).json({ message: 'Activity not found' });
      }
      res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
      console.error('Error deleting activity:', error); 
      res.status(500).json({ message: 'Server error' });
  }
};