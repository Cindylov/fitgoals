import React from 'react';
import { Link } from 'react-router-dom';


function Article1() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">5 Tips for a Healthy Diet</h1>
      <p className="mb-2">Eating a balanced diet is crucial for maintaining good health. Here are five tips to help you achieve this:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Include a variety of fruits and vegetables in your meals.</li>
        <li>Opt for whole grains instead of refined grains.</li>
        <li>Limit added sugars and salt in your diet.</li>
        <li>Stay hydrated by drinking plenty of water.</li>
        <li>Plan your meals and snacks to avoid unhealthy choices.</li>
      </ul>
      <p>By following these tips, you can improve your overall health and well-being.</p>
      <button class='rounded-full border border-sky-100 bg-green-500 px-2 py-0.5 text-white'><Link to="/">Back Home</Link></button>
    </div>
  );
}

export default Article1;
