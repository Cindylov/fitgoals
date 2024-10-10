const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    water: { type: Number, required: true }, 
    exercise: { type: Number, required: true }, 
    date: { type: Date, default: Date.now }, 
    notes: { type: String, default: '' }, 
    duration: { type: Number, default: 0 }, 
    type: { type: String, enum: ['cardio', 'strength', 'flexibility', 'other'], default: 'other' } 
});

module.exports = mongoose.model('Activity', ActivitySchema);
