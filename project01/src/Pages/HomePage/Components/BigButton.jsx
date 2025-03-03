import React from 'react';
import '../../../styles/BigButton.css'; // Importar estilos del BigButton

const BigButton = ({ label }) => {
    return (
        <button className="big-button">
            {label}
        </button>
    );
};

export default BigButton;