import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FoodCard from '../components/FoodCard';
import axios from 'axios';

const UserDashboard = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/foods')
      .then((res) => setFoods(res.data))
      .catch((err) => console.error('Failed to load foods', err));
  }, []);

  const addToCart = (food) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
      _id: food._id,
      name: food.name,
      price: food.price,
      imageUrl: food.imageUrl || food.image || '', // Ensure image is included
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('✅ Added to cart!');
  };

  return (
    <>
      <Navbar isAdmin={false} />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>🍽️ Food Menu</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} onAddToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default UserDashboard;
