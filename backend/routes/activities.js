const express = require('express');
const router = express.Router();
const { getAllActivities, addActivity, deleteActivity } = require('../controllers/activityController');

// Route to get all activities
router.get('/', getAllActivities);

// Route to add a new activity
router.post('/', addActivity); 

// Route to delete an activity by ID
router.delete('/:id', deleteActivity);

module.exports = router;
