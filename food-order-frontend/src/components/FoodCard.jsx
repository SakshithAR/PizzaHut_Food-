import React from 'react';

const FoodCard = ({ food, onAddToCart }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '250px' }}>
    <img src={food.image} alt={food.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
    <h3>{food.name}</h3>
    <p>{food.description}</p>
    <p>Price: ₹{food.price}</p>
    {onAddToCart && <button onClick={() => onAddToCart(food)}>Add to Cart</button>}
  </div>
);

export default FoodCard;