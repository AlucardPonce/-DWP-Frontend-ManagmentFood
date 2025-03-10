import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Pagina from './Components UI/Pagina';
import MainLayout from './Layouts/MainLayout';
import Login from './Pages/Login/LoginPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="pagina" element={<Pagina />} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/" element={<Login/>}>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
