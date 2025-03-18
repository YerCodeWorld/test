// src/components/layout/Header.tsx
import * as React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './../layout/Menu';
// import { getInitials } from "../../methods";
import '../../styles/components/layout/header.css';

// import img from '../../images/full/blue.png';

// Add a section that indicates the current section

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header id="header">
            <div className="header-container">

                <Link to="/" className="title logo-container">
                    <span className="visually-hidden">EduGuiders</span>
                </Link>

                {/*<h1>Home</h1>*/}

                <nav className="main-nav">
                    <ul>
                        {/* Add link to EduTeachers */}
                        <li><Link to="/teachers">Teachers</Link></li>
                        <li><Link to="/cons/blog">Journal</Link></li>
                        <li><Link to="/cons/games">Games</Link></li>
                        <li><Link to="/cons/courses">Courses</Link></li>
                        <li><Link to="/cons/compete">Competitions</Link></li>
                    </ul>
                </nav>

                <div className="auth-buttons">
                    <Link to="/login" className="login-button">Log In</Link>
                    <Link to="/register" className="register-button">Register</Link>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <span className="menu-icon">☰</span>
                    </button>
                </div>

            </div>

            <Menu isOpen={menuOpen} onClose={closeMenu} />
        </header>
    );
};

export default Header;