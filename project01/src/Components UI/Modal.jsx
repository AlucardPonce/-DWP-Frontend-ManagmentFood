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

const SidebarMenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ width: 256 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<NotificationOutlined />}>
                    Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<ContactsOutlined />}>
                    Option 3
                </Menu.Item>
                <Menu.Item key="4" icon={<SettingOutlined />}>
                    Option 4
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default SidebarMenu;
