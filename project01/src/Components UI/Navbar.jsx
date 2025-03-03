import React from 'react';
import '../styles/Navbar.css'; // Importar estilos del Navbar

const Navbar = () => {
    return (
        <nav>
            <div className="logo">Logo</div>
            <div className="nav-links">
                <a href="/">Inicio</a>
                <a href="/graficas">Gráficas</a>
                <a href="/sucursales">Sucursales</a>
                <input type="text" placeholder="Buscar..." />
            </div>
        </nav>
    );
};

export default Navbar;