// src/components/layout/Header.tsx
import * as React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './../layout/Menu';
import { useI18n } from '@repo/i18n';
// import { getInitials } from "../../methods";
import '../../styles/components/layout/header.css';

// import img from '../../images/full/blue.png';

// Add a section that indicates the current section

const Header = () => {
    // I18n stuff
    const { t, locale, setLocale, supportedLocales } = useI18n();

    // As Locale and event.target.value are not equivalent (the latter being a string), it is necessary to compare
    // or convert somehow, and that's why I decided to create a custom hook.
    // Btw, that "React.ChangeEvent<HTMLSelectElement>" came from the "infer type from usage". I am not that intelligent
    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {

        for (const s of supportedLocales) {

            // Remember event.target.value is uppercase
            if (s.toString().toUpperCase() === event.target.value) {

                // The same witchery we did in the provider for async returns
                (async () => {
                    await setLocale(s);
                })().catch(err => {
                    console.error('Failed to change language:', err)
                });
            }
        }
    }

    console.log("The supported locales are the following: ", supportedLocales)
    console.log("The current locale is the following: ", locale)

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
                        <li><Link to="/construction/teachers">{t('navigation.teachers')}</Link></li>
                        <li><Link to="/construction/blog">{t('navigation.journal')}</Link></li>
                        <li><Link to="/construction/games">{t('navigation.games')}</Link></li>
                        <li><Link to="/construction/courses">{t('navigation.courses')}</Link></li>
                        <li><Link to="/construction/match">{t('navigation.competitions')}</Link></li>
                    </ul>
                </nav>

                <div className="auth-buttons">
                    <Link to="/login" className="login-button">{t('buttons.login')}</Link>
                    <select className="language-selector" onChange={(event) => (changeLanguage(event))}>
                        {/*Update options dynamically based on available languages*/}
                        {supportedLocales.map((code) => (
                            <option key={code}>
                                {code.toUpperCase()}
                            </option>
                        ))}
                    </select>
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

// { /**className={locale === code ? 'active' : ''}**/ }