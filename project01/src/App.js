import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MainLayout from './Layouts/MainLayout';
import Login from './Pages/Login/LoginPage';
import Sucursal from './Pages/Sucursales/Sucursal';
import Graficas from './Pages/Graficas/Graficas';
import Producto from './Pages/ProductoVenta/ProductoVenta';
import Inventario from './Pages/Inventario/Inventario';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="graficas" element={<Graficas />} />
                    <Route path="producto" element={<Producto />} />
                    <Route path="inventario" element={<Inventario />} />
                    <Route path="sucursales" element={<Sucursal />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
