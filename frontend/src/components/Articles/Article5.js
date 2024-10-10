import React from 'react';
import { Link } from 'react-router-dom';

function Article5() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Nutrition Tips for Weight Loss</h1>
      <p className="mb-2">Achieving weight loss requires a combination of healthy eating habits and regular physical activity. Here are some nutrition tips to help you:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Focus on whole, unprocessed foods such as fruits, vegetables, whole grains, and lean proteins.</li>
        <li>Control portion sizes to prevent overeating.</li>
        <li>Limit added sugars and saturated fats.</li>
        <li>Eat more fiber-rich foods to stay full longer.</li>
        <li>Stay mindful of your eating habits; avoid distractions during meals.</li>
      </ul>
      <p>Remember, sustainable weight loss takes time. Make gradual changes to your diet and lifestyle, and stay committed to your goals!</p>
      <button class='rounded-full border border-sky-100 bg-green-500 px-2 py-0.5 text-white'><Link to="/">Back Home</Link></button>
    </div>
  );
}

export default Article5;
