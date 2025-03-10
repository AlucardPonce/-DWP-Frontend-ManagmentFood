import React from 'react';
import BigButton from './Components/BigButton';
import '../../styles/HomePage.css';

const HomePage = () => {
    return (
        <div>
                <div className="content">
                    <BigButton label="SUCURSALES" />
                    <BigButton label="GRÁFICAS" />
                    <BigButton label="INVENTARIO" />
                    <BigButton label="PRODUCTO" />
                </div>
            </div>
    );
};

export default HomePage;