import React from 'react';
import { Link } from 'react-router-dom';

function Article3() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">The Importance of Hydration</h1>
      <p className="mb-2">Staying hydrated is essential for your overall health. Here’s why hydration matters:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Helps maintain the balance of bodily fluids.</li>
        <li>Aids in digestion and nutrient absorption.</li>
        <li>Regulates body temperature and keeps joints lubricated.</li>
        <li>Improves skin health and enhances energy levels.</li>
        <li>Supports cognitive function and mood stability.</li>
      </ul>
      <p>Make it a habit to drink water throughout the day. Aim for at least 8 glasses (2 liters) of water daily, and adjust based on your activity level!</p>
      <button class='rounded-full border border-sky-100 bg-green-500 px-2 py-0.5 text-white'><Link to="/">Back Home</Link></button>
    </div>
  );
}

export default Article3;
