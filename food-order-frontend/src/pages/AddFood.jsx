import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const AddFood = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async () => {
    if (!name || !description || !price || !image) {
      alert('Please fill all fields');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/foods', {
        name,
        description,
        price,
        image,
      });

      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);

      setName('');
      setDescription('');
      setPrice('');
      setImage('');
      setPreview('');
    } catch (error) {
      alert('❌ Error adding food');
      console.error(error);
    }
  };

  return (
    <>
      <Navbar isAdmin={true} />
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
        <h2>Add Food</h2>

        {showNotification && (
          <div
            style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #c3e6cb',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            ✅ Food Added Successfully!
          </div>
        )}

        <input
          placeholder='Food Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br /><br />
        <input
          type='number'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /><br /><br />
        <input
          placeholder='Image URL'
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
            setPreview(e.target.value);
          }}
        /><br /><br />

        {preview && (
          <div>
            <h4>Preview:</h4>
            <img
              src={preview}
              alt='Preview'
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </div>
        )}

        <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddFood;
