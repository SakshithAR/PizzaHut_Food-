import React from 'react';
import Navbar from '../components/Navbar';

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handlePayment = () => {
    alert('💳 Payment Successful!');
    localStorage.removeItem('cart');
    window.location.reload();
  };

  return (
    <>
      <Navbar isAdmin={false} />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>🛒 Your Cart</h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {cart.length === 0 ? (
          <h3 style={{ textAlign: 'center', width: '100%' }}>Your cart is empty.</h3>
        ) : (
          cart.map((item, i) => (
            <div key={i} style={{
              width: '300px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#fff'
            }}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
              />
              <h3 style={{ margin: '10px 0 5px' }}>{item.name}</h3>
              <p style={{ fontWeight: 'bold' }}>₹{item.price}</p>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          paddingBottom: '40px'
        }}>
          <h3 style={{ fontSize: '22px' }}>Total: ₹{total}</h3>
          <button
            onClick={handlePayment}
            style={{
              padding: '14px 28px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '15px'
            }}
          >
            💳 Pay Now
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
