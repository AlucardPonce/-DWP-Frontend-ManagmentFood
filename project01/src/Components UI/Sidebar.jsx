import React, { useState } from "react";
import {
    UserOutlined,
    NotificationOutlined,
    ContactsOutlined,
    SettingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "../styles/Sidebar.css";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate(); // Hook para la navegación

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (e) => {
        
        const routes = {
            1: "/perfil",
            2: "/notificaciones",
            3: "/contacto",
            4: "/configuraciones",
            5: "/",
        };

        const path = routes[e.key];
        if (path) {
            navigate(path);
        }
    };

    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <Button type="primary" onClick={toggleCollapsed} className="menu-toggle">
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={["1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                onClick={handleMenuClick}
                items={[
                    {
                        key: "1",
                        icon: <UserOutlined />,
                        label: "Perfil",
                    },
                    {
                        key: "2",
                        icon: <NotificationOutlined />,
                        label: "Notificaciones",
                    },
                    {
                        key: "3",
                        icon: <ContactsOutlined />,
                        label: "Contacto",
                    },
                    {
                        key: "4",
                        icon: <SettingOutlined />,
                        label: "Configuraciones",
                    },
                    {
                        key: "5",
                        icon: <LogoutOutlined />,
                        label: "Cerrar Sesión",
                    },
                ]}
            />
        </div>
    );
};

export default Sidebar;
