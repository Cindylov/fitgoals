import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBMI);

      if (calculatedBMI < 18.5) {
        setStatus('Underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        setStatus('Normal weight');
      } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
        setStatus('Overweight');
      } else {
        setStatus('Obesity');
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-4">BMI Calculator</h2>
      <form onSubmit={calculateBMI} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Weight (kg):</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            className="border p-2 w-full rounded" 
            required 
            min="0"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Height (cm):</label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            className="border p-2 w-full rounded" 
            required 
            min="0"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Calculate BMI</button>
      </form>
      {bmi && (
        <div className="mt-4 text-center">
          <p className="text-xl">Your BMI: <span className="font-bold">{bmi}</span></p>
          <p className="text-lg">Status: <span className="font-semibold">{status}</span></p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
