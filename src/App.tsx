import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Login from './components/Login/Login.tsx';

function App() {
    return (
        <Router>
            <>
                <Header title="Code Careers" />
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
