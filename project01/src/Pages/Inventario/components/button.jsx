import React from 'react';
import { Button } from 'antd';
import './styles/styles.css';

const Bto = ({ label }) => {
    return (
        <Button className='btn' type="primary">{label}</Button>
    );
}

export default Bto;