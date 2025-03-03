import React from 'react';
import Navbar from '../../Components UI/Navbar';
import Sidebar from '../../Components UI/Sidebar';
import BigButton from './Components/BigButton';
import '../../styles/HomePage.css'; // Importar estilos de la página principal

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <Sidebar />
                <div className="content">
                    <BigButton label="SUCURSALES" />
                    <BigButton label="GRÁFICAS" />
                    <BigButton label="INVENTARIO" />
                    <BigButton label="PRODUCTO" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;