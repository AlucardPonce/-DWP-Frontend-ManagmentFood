import React from 'react';
import SidebarMenu from './Modal'; // Asegúrate de que la ruta sea correcta

const App = () => {
    return (
        <div style={{ display: 'flex' }}>
            <SidebarMenu />
            <div style={{ marginLeft: 20 }}>
                <h1>Contenido Principal</h1>
            </div>
        </div>
    );
};

export default App;
