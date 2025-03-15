import React from 'react';
import { Button, Select, Input, message, Modal, Form, List } from 'antd';
import './styles/styles.css';


const Options = ({ label1,label2, placeholder }) => {
    return (
        <Select className='select'
            style={{ marginBottom: 20 }}
            placeholder={placeholder}
            onChange={(value) => {
            }}
        >
            <Select.Option>
                {label1}
            </Select.Option>
            <Select.Option>
                {label2}
            </Select.Option>
        </Select>
    );
};

export default Options;