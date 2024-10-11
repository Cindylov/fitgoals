import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HealthGoals() {
    const [goals, setGoals] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');

    const fetchGoals = async () => {
        try {
            const response = await axios.get('https://fitgoals.onrender.com/api/goals');
            setGoals(response.data);
        } catch (error) {
            console.error('Error fetching goals:', error);
        }
    };

    useEffect(() => {
        fetchGoals();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGoal = { title, description, targetDate };

        try {
            const response = await axios.post('https://fitgoals.onrender.com/api/goals/add', newGoal);
            setGoals([...goals, response.data]);
            setTitle('');
            setDescription('');
            setTargetDate('');
        } catch (error) {
            console.error('Error adding goal:', error);
            alert('An error occurred while adding the goal.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://fitgoals.onrender.com/api/goals/${id}`);
            setGoals(goals.filter(goal => goal._id !== id));
        } catch (error) {
            console.error('Error deleting goal:', error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Health Goals</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
                <div className="mb-4">
                    <label className="block mb-2">Goal Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="border p-2 w-full rounded" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description:</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="border p-2 w-full rounded" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Target Date:</label>
                    <input 
                        type="date" 
                        value={targetDate} 
                        onChange={(e) => setTargetDate(e.target.value)} 
                        className="border p-2 w-full rounded" 
                        required 
                    />
                </div>
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Add Goal</button>
            </form>

            <h3 className="text-xl font-semibold mb-2">Your Goals:</h3>
            {goals.length === 0 ? (
                <p>No goals set yet.</p>
            ) : (
                <ul className="list-disc list-inside space-y-2">
                    {goals.map((goal) => (
                        <li key={goal._id} className="bg-white p-4 rounded shadow">
                            <h4 className="font-bold">{goal.title}</h4>
                            <p>{goal.description}</p>
                            <p>Target Date: {new Date(goal.targetDate).toLocaleDateString()}</p>
                            <p>Status: {goal.completed ? 'Completed' : 'In Progress'}</p>
                            <button 
                                onClick={() => handleDelete(goal._id)} 
                                className="bg-red-600 text-white py-1 px-2 rounded mt-2"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default HealthGoals;
