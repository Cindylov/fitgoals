const Goal = require('../models/Goal');

exports.deleteGoal = async (req, res) => {
  console.log("Received request to delete goal with ID:", req.params.id); 
  try {
      const goalId = req.params.id;
      const deletedGoal = await Goal.findByIdAndDelete(goalId);
      console.log("Deleted goal:", deletedGoal); 
      if (!deletedGoal) {
          return res.status(404).json({ message: 'Goal not found' });
      }
      res.status(200).json({ message: 'Goal deleted successfully' });
  } catch (error) {
      console.error("Error deleting goal:", error); 
      res.status(500).json({ message: 'Error deleting goal', error });
  }
};
