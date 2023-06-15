import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

export default () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <Menu isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
            <Link className="menu-item" to="/" onClick={closeSidebar}>
                Yoga Database
            </Link>
            <Link className="menu-item" to="/profile" onClick={closeSidebar}>
                My Profile
            </Link>
            <Link className="menu-item" to="/achievements" onClick={closeSidebar}>
                My Achievements
            </Link>
            <Link className="menu-item" to="/desserts" onClick={closeSidebar}>
                Log out
            </Link>
        </Menu>
    );
};
