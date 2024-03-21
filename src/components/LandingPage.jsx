import React, { useState } from 'react';
import { Navigate, Link ,useNavigate} from 'react-router-dom';
import backgroundImage from '../images/landing.png';
import { useAuth } from '../contexts/authContext';
import Login from './auth/login';

const LandingPage = () => {
  
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/dashboard/login'); 
  };

  return (
    <div>
      {/* Top Section with Background Image */}
      <header className="bg-gray-800 text-white py-4 relative">
        {/* Add your background image style here */}
        <div className="bg-cover bg-center h-80 flex justify-center items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold" style={{'font-family': 'oswaldregular'}}>Welcome to Trust Our Souls</h1>
            <p className="mt-4 text-lg text-center text-gray-200">
              Begin your <strong className="text-white">'Soulful'</strong> relationship journey that's right for you!
              Leverage 67 years of experience in consummating soulful relationships that are right for you!
              When you onboard with us, you are sure to leave the stress, headache, and mundane
              dating and matrimonial relationship search.
              With our iterative and proven process of blending cosmic and astronomical compatibility
              with neurodiversity compatibility, we assist you in finding your soulmate that you can
              cherish your entire life!
            </p>
          </div>
        </div>
        {/* Login Button */}
       
          <button onClick={handleLogin} className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Login
          </button>
        
      </header>
      <main className="w-full h-screen flex self-center place-content-center place-items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center items-center">
          <nav className="space-x-4">
            <Link to="/about">About Us</Link>
            <Link to="/client-stories">Client Stories</Link>
            <Link to="/services">Services</Link>
            <Link to="/legal">Legal – T&amp;C and Privacy</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
