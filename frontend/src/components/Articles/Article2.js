import React from 'react';
import { Link } from 'react-router-dom';

function Article2() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Stay Motivated in Your Fitness Journey</h1>
      <p className="mb-2">Staying motivated can be challenging when it comes to fitness. Here are some strategies to keep your spirits high:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Set realistic and achievable goals.</li>
        <li>Track your progress to see how far you've come.</li>
        <li>Find a workout buddy to keep each other accountable.</li>
        <li>Mix up your routine to keep things fresh and exciting.</li>
        <li>Reward yourself for achieving milestones.</li>
      </ul>
      <p>Remember, motivation can fluctuate, but consistency is key. Keep pushing yourself, and don't be afraid to seek support from friends and family!</p>
      <button class='rounded-full border border-sky-100 bg-green-500 px-2 py-0.5 text-white'><Link to="/">Back Home</Link></button>
    </div>
  );
}

export default Article2;
