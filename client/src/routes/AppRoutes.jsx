import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Home from '../pages/Home';
import Register from '../pages/auth/Register';
import Products from '../pages/Products';
import Categories from '../pages/Categories';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
