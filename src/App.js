import "./App.css";

import '@fortawesome/fontawesome-free/css/all.css';

import * as React from 'react';
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import {
    AboutUs,
    OurAim,
    OurVision,
} from "./pages/AboutUs";
import {
    Services
} from "./pages/Services";

import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import MainPage from "./components/MainPage";
import HomePage from './pages/HomePage';
import { useAuth } from '../src/contexts/authContext'
import Profile from './pages/profile/Profile';


function App() {
    const { userLoggedIn } = useAuth()
    return (
        <>
            <Router>
                <div>
                  
                    <Routes>
                    <Route path="/" element={<LandingPage userLoggedIn={userLoggedIn} Component={MainPage} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<LandingPage userLoggedIn={userLoggedIn} Component={AboutUs} />} />
                    <Route path="contact" element={<LandingPage userLoggedIn={userLoggedIn} Component={Contact} />} />
                    <Route path="services" element={<LandingPage userLoggedIn={userLoggedIn} Component={Services} />} />
                         <Route path="/dashboard/login" element={<Login />} />
                        {userLoggedIn ? (
                            <>
                            <Route path="/dashboard/*" element={<Dashboard />} />
                           
                            </>
                        ) : (
                            <Route path="*" element={<Navigate to="/dashboard/login" replace />} />
                        )}
                                        </Routes>
                                      
                </div>
            </Router>

        </>
    );
}

export default App;

