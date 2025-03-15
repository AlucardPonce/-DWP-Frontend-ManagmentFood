import React from 'react';
import BigButton from './Components/BigButton';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const HomePage = () => {
    return (
        <div>
            <div className='titulo'><h1>Bienvenido!</h1></div>
                <div className="content">
                <Link to={"/home/sucursales"}><BigButton label="SUCURSALES" /></Link>
                <Link to={"/home/graficas"}><BigButton label="GRÁFICAS" /></Link>
                <Link to={"/home/inventario"}><BigButton label="INVENTARIO" /></Link>
                <Link to={"/home/producto"}><BigButton label="PRODUCTO" /></Link>
                </div>
            </div>
    );
};

export default HomePage;