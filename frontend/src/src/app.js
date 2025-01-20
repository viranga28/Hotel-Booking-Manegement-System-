import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import HotelListPage from './pages/HotelListPage';
import HotelDetails from './components/HotelDetails';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import './styles.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hotels" element={<HotelListPage />} />
                        <Route path="/hotels/:id" element={<HotelDetails />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<UserProfile />} />
                    </Routes>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
