import React from 'react';
import Ventas from './components/ventas';
import './components/Styles/grafica.css';
import Btn from './components/button';

const Graficas = () => {
    return (
        <div>
            <div className='content'>
                <div class="parent1">
                    <div class="div1">Gráfica de Querétaro</div>
                    <div class="div2"><Ventas></Ventas></div>
                    <div class="div3"><Btn></Btn></div>
                </div>
            </div>
        </div>
    );
};

export default Graficas;