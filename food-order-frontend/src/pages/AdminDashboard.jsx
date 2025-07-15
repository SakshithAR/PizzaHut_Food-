import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const [foods, setFoods] = useState([]);

  // Fetch foods from backend
  const fetchFoods = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/foods');
      setFoods(res.data);
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this food item?');
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/foods/${id}`);
      setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
    } catch (error) {
      console.error('Failed to delete:', error);
      alert('Failed to delete item. Please try again.');
    }
  };

  return (
    <>
      <Navbar isAdmin={true} />
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Admin Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        {foods.map((food) => (
          <div
            key={food._id}
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
              width: '250px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <img src={food.image} alt={food.name} width='100%' height='150px' style={{ objectFit: 'cover' }} />
            <h4 style={{ marginTop: '10px' }}>{food.name}</h4>
            <p>{food.description}</p>
            <p><strong>₹{food.price}</strong></p>
            <button
              onClick={() => handleDelete(food._id)}
              style={{
                background: 'red',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;
