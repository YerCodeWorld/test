// src/components/layout/Menu.tsx

import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './../../styles/components/layout/menu.css';

// import images

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const themeColors = [
    // remember to add images
    { name: 'Teal', primary: '#5C9EAD', primaryDark: '#487F8A'},
    { name: 'Pink', primary: '#D46BA3', primaryDark: '#B3588C' },
    { name: 'Blue', primary: '#779ECB', primaryDark: '#637EB0' },
    { name: 'Coral', primary: '#E08D79', primaryDark: '#C17063'},
    { name: 'Lavender', primary: '#A47BB9', primaryDark: '#8A66A0'}
]

const Menu = ({ isOpen, onClose }: MenuProps) => {

    const isAuthenticated: boolean = true;

    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleEscKey);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            window.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        }

    }, [isOpen, onClose]);


    const changeThemeColor = (primary: string, primaryDark: string) => {

        document.documentElement.style.setProperty('--primary', primary);
        document.documentElement.style.setProperty('--primary-dark', primaryDark);

        /**
        if (image) {
            document.documentElement.style.setProperty('--logo', `url(${image})`);
        }
            */

        // This will need to be updated to the database
        localStorage.setItem('primary', primary);
        localStorage.setItem('primary-dark', primaryDark);

        /**
        if (image) {
            localStorage.setItem('logo', image);
        }
            */

    };

    useEffect(() => {
        const savedPrimary = localStorage.getItem('primary');
        const savedDark = localStorage.getItem('primary-dark');

        if (savedDark && savedPrimary) {
            changeThemeColor(savedPrimary, savedDark);
        }
    }, []);

    // Return Role-Specific menus

    return (
        <>
            {/* Backdrop for closing the menu when clicking outside */}
            {isOpen && (
                <div className="menu-backdrop" onClick={onClose} />
            )}

            {/* Menu content */}
            <div className={`menu ${isOpen ? 'is-active' : ''}`}>
                <div className="menu-inner">
                    <div className="menu-header">
                        <h2>Navigation</h2>
                        <button
                            className="close-button"
                            onClick={onClose}
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                    </div>

                    <div className="menu-content">
                        {/* Main navigation links */}
                        <div className="main-links">
                            <ul>
                                <li><Link to="/" onClick={onClose}>Home</Link></li>
                                <li><Link to="/teachers" onClick={onClose}>Teachers</Link></li>
                                <li><Link to="/cons/blog" onClick={onClose}>Journal</Link></li>
                                <li><Link to="/cons/games" onClick={onClose}>Games</Link></li>
                                <li><Link to="/cons/courses" onClick={onClose}>Courses</Link></li>
                                <li><Link to="/cons/competition" onClick={onClose}>Competitions</Link></li>
                            </ul>
                        </div>

                        {/* Role-specific navigation */}

                        {/* Add theme selector above the logout/login buttons */}
                        <div className="theme-selector">
                            <div className="color-options">
                                {themeColors.map((color) => (
                                    <button
                                        key={color.name}
                                        className="color-option"
                                        style={{ backgroundColor: color.primary }}
                                        title={color.name}
                                        onClick={() => changeThemeColor(color.primary, color.primaryDark)}
                                        aria-label={`Set theme to ${color.name}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Authentication actions */}
                        <div className="auth-actions">
                            {isAuthenticated ? (
                                <button className="logout-button">
                                    Log Out
                                </button>
                            ) : (
                                <div className="login-actions">
                                    <Link to="/login" className="login-button" onClick={onClose}>
                                        Log In
                                    </Link>
                                    <Link to="/register" className="register-button" onClick={onClose}>
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

};

export default Menu;