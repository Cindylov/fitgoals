import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Tracker from './components/Tracker';
import ProgressDashboard from './components/ProgressDashboard';
import HealthGoals from './components/HealthGoals';
import Article1 from './components/Articles/Article1';
import Article2 from './components/Articles/Article2';
import Article3 from './components/Articles/Article3';
import Article4 from './components/Articles/Article4';
import Article5 from './components/Articles/Article5';

function App() {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-green-600 p-4 text-white relative">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">FitGoals</div>

            {!isOpen && (
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none lg:hidden"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              </button>
            )}
          </div>

          <ul
            className={`lg:flex space-x-4 lg:justify-end ${isOpen ? 'block absolute -top-14 -right-48 mt-12 p-4 bg-green-600 w-full' : 'hidden'} lg:block`}
          >
            {isOpen && (
              <li className="mt-2 lg:mt-0">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"  
                    />
                  </svg>
                </button>
              </li>
            )}

            <li className="mt-2 lg:mt-0"><Link to="/">Home</Link></li>
            <li className="mt-2 lg:mt-0"><Link to="/tracker">Daily Tracker</Link></li>
            <li className="mt-2 lg:mt-0"><Link to="/progress">Progress Dashboard</Link></li>
            <li className="mt-2 lg:mt-0"><Link to="/goals">Health Goals</Link></li>
          </ul>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/progress" element={<ProgressDashboard />} />
            <Route path="/goals" element={<HealthGoals />} />
            <Route path="/article1" element={<Article1 />} />
            <Route path="/article2" element={<Article2 />} />
            <Route path="/article3" element={<Article3 />} />
            <Route path="/article4" element={<Article4 />} />
            <Route path="/article5" element={<Article5 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
