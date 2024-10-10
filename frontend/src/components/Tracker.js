import React, { useState } from 'react';
import '../App.css'

function Tracker() {
  const [water, setWater] = useState('');
  const [exercise, setExercise] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { water: Number(water), exercise: Number(exercise) };

    try {
      const response = await fetch('http://localhost:5000/api/activities/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Activity logged successfully!');
        setWater('');
        setExercise('');
      } else {
        alert('Failed to log activity.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600 mb-4">Daily Activity Tracker</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className='video-container mb-4'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/t3pExN5hKJc" title="YouTube Video Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-writer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

        <div className="mb-4">
          <label className="block mb-2">Water Intake (in glasses):</label>
          <input 
            type="number" 
            value={water} 
            onChange={(e) => setWater(e.target.value)} 
            className="border p-2 w-full rounded" 
            required 
            min="0"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Exercise (in minutes):</label>
          <input 
            type="number" 
            value={exercise} 
            onChange={(e) => setExercise(e.target.value)} 
            className="border p-2 w-full rounded" 
            required 
            min="0"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Log Activity</button>
      </form>
    </div>
  );
}

export default Tracker;
