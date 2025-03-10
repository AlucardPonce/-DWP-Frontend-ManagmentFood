import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Pagina from './Components UI/Pagina';
import MainLayout from './Layouts/MainLayout';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="pagina" element={<Pagina />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
