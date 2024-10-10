import React, { useState }  from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';  // Carousel CSS
import { Link } from 'react-router-dom';

// Importing images
import BalancedDietImage from '../images/Balanced_Diet_Hero_Image.jpg';
import ExerciseImage from '../images/exercise.jpg';
import WaterImage from '../images/drink-a-lot-of-water.jpg';
import HealthyLivingImage from '../images/healthylife.jpg';
import HealthyDietyImage from '../images/healthtip.jpeg';
import hydrationImage from '../images/Hydration.jpg';
import fitnessjourneyImage from '../images/journey.jpg';
import workoutImage from '../images/workout.jpg';
import nutrutionImage from '../images/nutrution.jpeg';


function Home() {

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
    <div className="text-center">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-green-600 mb-4">Welcome to Fit Goals</h1>
      <p className="text-lg mb-8">Track your daily activities, monitor your progress, and achieve your health goals!</p>

      {/* Carousel Section */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <Carousel 
          showThumbs={false} 
          infiniteLoop 
          autoPlay 
          interval={3000} 
          showStatus={false} // Remove status indicators
          className="carousel-container" // Custom class for styling
        >
          <div>
            <img src={BalancedDietImage} alt="Healthy Diet" className="w-full h-auto" /> {/* Full width */}
            <p className="legend">Eat a Balanced Diet</p>
          </div>
          <div>
            <img src={ExerciseImage} alt="Exercise Daily" className="w-full h-auto" /> {/* Full width */}
            <p className="legend">Exercise Regularly</p>
          </div>
          <div>
            <img src={WaterImage} alt="Stay Hydrated" className="w-full h-auto" /> {/* Full width */}
            <p className="legend">Drink Plenty of Water</p>
          </div>
        </Carousel>
      </div>

      {/* Flex Layout for Image and Healthy Tips */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-5">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src={HealthyLivingImage}
            alt="Healthy Living"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Healthy Tips Section */}
        <div className="lg:w-1/2 w-full lg:pl-8 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-green-500">Healthy Living Tips</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Eat a variety of fruits and vegetables every day.</li>
            <li>Exercise for at least 30 minutes daily.</li>
            <li>Drink 8 glasses of water per day to stay hydrated.</li>
            <li>Get 7-8 hours of sleep every night.</li>
            <li>Avoid sugary drinks and excessive junk food.</li>
          </ul>
        </div>
      </div>

      {/* BIM */}
      <div>
      <h2 className="text-2xl font-bold text-green-600 mb-4">BMI Calculator</h2>
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
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Calculate BMI</button>
      </form>
      {bmi && (
        <div className="mt-4 text-center">
          <p className="text-xl">Your BMI: <span className="font-bold">{bmi}</span></p>
          <p className="text-lg">Status: <span className="font-semibold">{status}</span></p>
        </div>
      )}
    </div>

    {/* Articles Section */}
    <div className="my-8">
  <h2 className="text-2xl font-semibold mb-4">Latest Articles</h2>
  <div className="text-lg space-y-8 flex flex-col lg:flex-row items-center justify-center flex-wrap">
    
    {/* Article 1 */}
    <figure className="flex flex-col items-center lg:w-1/5 w-full mb-8">
      <img src={HealthyDietyImage} alt="Healthy Diet" className="w-48 rounded-lg shadow-lg mb-2" />
      <figcaption className="text-center">
        <Link to="/article1" className="text-blue-500">5 Tips for a Healthy Diet</Link>
      </figcaption>
    </figure>

    {/* Article 2 */}
    <figure className="flex flex-col items-center lg:w-1/5 w-full mb-8">
      <img src={fitnessjourneyImage} alt="Fitness Journey" className="w-48 rounded-lg shadow-lg mb-2" />
      <figcaption className="text-center">
        <Link to="/article2" className="text-blue-500">How to Stay Motivated in Your Fitness Journey</Link>
      </figcaption>
    </figure>

    {/* Article 3 */}
    <figure className="flex flex-col items-center lg:w-1/5 w-full mb-8">
      <img src={hydrationImage} alt="Hydration" className="w-48 rounded-lg shadow-lg mb-2" />
      <figcaption className="text-center">
        <Link to="/article3" className="text-blue-500">The Importance of Hydration</Link>
      </figcaption>
    </figure>

    {/* Article 4 */}
    <figure className="flex flex-col items-center lg:w-1/5 w-full mb-8">
      <img src={workoutImage} alt="Workout" className="w-48 rounded-lg shadow-lg mb-2" />
      <figcaption className="text-center">
        <Link to="/article4" className="text-blue-500">Simple Home Workouts You Can Do</Link>
      </figcaption>
    </figure>

    {/* Article 5 */}
    <figure className="flex flex-col items-center lg:w-1/5 w-full mb-8">
      <img src={nutrutionImage} alt="Nutrition Tips" className="w-48 rounded-lg shadow-lg mb-2" />
      <figcaption className="text-center">
        <Link to="/article5" className="text-blue-500">Nutrition Tips for Weight Loss</Link>
      </figcaption>
    </figure>

  </div>
</div>

    </div>
  );
}

export default Home;
