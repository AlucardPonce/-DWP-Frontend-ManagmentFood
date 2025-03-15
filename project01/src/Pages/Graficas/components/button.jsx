import React from 'react';
import { Button, Select, Input, message, Modal, Form, List } from 'antd';
import './styles/styles.css';

const Bto = ({ label }) => {
    return (
        <Button type="primary">{label}</Button>
    );
}

export default Bto;