import React from 'react';
import { Link } from 'react-router-dom';

function Article4() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Simple Home Workouts You Can Do</h1>
      <p className="mb-2">No gym? No problem! Here are some effective workouts you can do at home:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Bodyweight squats: 3 sets of 10-15 reps.</li>
        <li>Push-ups: 3 sets of 8-12 reps.</li>
        <li>Plank: Hold for 30 seconds to 1 minute.</li>
        <li>Lunges: 3 sets of 10 reps per leg.</li>
        <li>Burpees: 3 sets of 5-10 reps.</li>
      </ul>
      <p>These exercises can help build strength and endurance. Remember to warm up before starting and cool down afterward!</p>
      <button class='rounded-full border border-sky-100 bg-green-500 px-2 py-0.5 text-white'><Link to="/">Back Home</Link></button>
    </div>
  );
}

export default Article4;
