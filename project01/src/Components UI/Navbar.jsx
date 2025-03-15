import React from 'react';
import { HomeOutlined, BarChartOutlined, ShopOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Logo.png';


const Navbar = () => {
    return (
        <nav>
            <div className="nav-content">
                <div className="logo">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" style={{ display: 'flex', alignItems: 'center', height: '40px', width: '40px' }} />
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to="/home"><HomeOutlined /> Inicio</Link>
                    <Link to="/home/graficas"><BarChartOutlined /> Gráficas</Link>
                    <Link to="/home/sucursales"><ShopOutlined /> Sucursales</Link>
                    <div className="search-container">
                        <SearchOutlined className="search-icon" />
                        <input type="text" placeholder="Buscar..." />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
