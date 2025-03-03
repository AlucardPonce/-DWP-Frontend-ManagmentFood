import React, { useState } from 'react';
import {
    UserOutlined,
    NotificationOutlined,
    ContactsOutlined,
    SettingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import '../styles/Sidebar.css'; // Importar estilos del Sidebar

const items = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'Perfil',
    },
    {
        key: '2',
        icon: <NotificationOutlined />,
        label: 'Notificaciones',
    },
    {
        key: '3',
        icon: <ContactsOutlined />,
        label: 'Contacto',
    },
    {
        key: '4',
        icon: <SettingOutlined />,
        label: 'Configuraciones',
    },
];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <Button
                type="primary"
                onClick={toggleCollapsed}
                className="menu-toggle"
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default Sidebar;