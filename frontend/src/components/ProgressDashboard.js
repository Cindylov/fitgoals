import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProgressDashboard() {
    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        try {
            const response = await fetch('https://fitgoals.onrender.com/api/activities');
            const data = await response.json();
            console.log('Fetched Activities:', data); 
            setActivities(data);
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    const handleDelete = async (id) => {
        console.log('Deleting activity with ID:', id);
        try {
            await axios.delete(`https://fitgoals.onrender.com/api/activities/${id}`);
            fetchActivities(); 
        } catch (error) {
            console.error('Error deleting activity:', error); 
        }
    };      

    return (
        <div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Progress Dashboard</h2>
            {activities.length === 0 ? (
                <p>No activities logged yet.</p>
            ) : (
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div key={activity._id} className="bg-white p-4 rounded shadow">
                            <p>Date: {new Date(activity.date).toLocaleDateString()}</p>
                            <p>Water Intake: {activity.water} glasses</p>
                            <p>Exercise: {activity.exercise} minutes</p>
                            <button 
                                onClick={() => handleDelete(activity._id)} 
                                className="bg-red-600 text-white py-1 px-2 rounded mt-2"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProgressDashboard;
