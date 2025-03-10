import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../src/Components UI/Navbar';
import Sidebar from '../../src/Components UI/Sidebar';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <main style={{ padding: '80px' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
