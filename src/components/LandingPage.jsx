import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';

const LandingPage = ({ Component }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/dashboard/login');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ paddingBottom: '2rem' }} className="bg-gray-800 text-white py-4 relative">
        <div className="bg-cover bg-center flex justify-center items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold" >Trust Our Souls</h1>
          </div>
        </div>
        <button onClick={handleLogin} className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Login
        </button>
      </header>
      <main className="flex-grow flex self-center place-content-center place-items-center" style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Component />
      </main>
      <footer style={{ marginTop: 'auto' }} className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center items-center">
          <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
