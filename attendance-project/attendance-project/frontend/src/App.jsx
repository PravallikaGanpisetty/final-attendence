import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './contexts/AuthContext';

const Private = ({ children }) => { const { user } = useContext(AuthContext); return user ? children : <Navigate to="/login" />; };

export default function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Private><Dashboard/></Private>} />
    </Routes>
  );
}
