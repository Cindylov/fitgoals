import React from 'react';

const healthTips = [
  "Drink at least 8 glasses of water a day.",
  "Incorporate 30 minutes of exercise daily.",
  "Eat a balanced diet rich in fruits and vegetables.",
  "Get 7-8 hours of sleep for optimal recovery.",
  "Take breaks to stretch during prolonged sitting."
];

function Tips() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Health Tips</h2>
      <ul className="list-disc list-inside space-y-2">
        {healthTips.map((tip, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tips;
