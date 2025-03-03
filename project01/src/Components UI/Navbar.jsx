import React from 'react';
import { HomeOutlined, BarChartOutlined, ShopOutlined, SearchOutlined } from '@ant-design/icons';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-content">
                <div className="logo">Logo</div>
                <div className="nav-links">
                    <a href="/"><HomeOutlined /> Inicio</a>
                    <a href="/graficas"><BarChartOutlined /> Gráficas</a>
                    <a href="/sucursales"><ShopOutlined /> Sucursales</a>
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
