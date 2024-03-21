import "./App.css";
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
                    <Route path="/" element={<LandingPage userLoggedIn={userLoggedIn} />} />
                    <Route path="/register" element={<Register />} />
                        <Route path="/dashboard/login" element={<Login />} />
                        {userLoggedIn ? (
                            <Route path="/dashboard/*" element={<Dashboard />} />
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

