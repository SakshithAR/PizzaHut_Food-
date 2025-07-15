import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Cart from './pages/Cart';
import AddFood from './pages/AddFood';

const App = () => (
  <div style={{ width: '100vw', minHeight: '100vh' }}>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/user' element={<UserDashboard />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/admin/add-food' element={<AddFood />} />
    </Routes>
  </div>
);

export default App;