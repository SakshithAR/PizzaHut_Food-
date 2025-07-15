import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAdmin }) => (
  <nav style={{ display: 'flex', justifyContent: 'space-evenly', padding: '15px', backgroundColor: '#333', color: '#fff', width: '100%' }}>
    <Link to={isAdmin ? '/admin' : '/user'} style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
    {!isAdmin && <Link to='/cart' style={{ color: '#fff', textDecoration: 'none' }}>Cart</Link>}
    {isAdmin && <Link to='/admin/add-food' style={{ color: '#fff', textDecoration: 'none' }}>Add Food</Link>}
    <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>Logout</Link>
  </nav>
);

export default Navbar;