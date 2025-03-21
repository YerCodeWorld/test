// src/components/layout/Menu.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@repo/i18n/src/index';
import blue from '../../images/full/blue.png';
import lavender from '../../images/full/lavender.png';
import purple from '../../images/full/purple.png';
import teal from '../../images/full/teal.png';
import warmPink from '../../images/full/warmPink.png';
// import coral from '../../images/full/coral.png';
import '../../styles/components/layout/menu.css';

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const themeColors = [
    { name: 'Teal', primary: '#5C9EAD', primaryDark: '#487F8A', image: teal},
    { name: 'Pink', primary: '#D46BA3', primaryDark: '#B3588C', image: warmPink },
    { name: 'Blue', primary: '#779ECB', primaryDark: '#637EB0', image: blue },
    { name: 'Coral', primary: '#E08D79', primaryDark: '#C17063', image: lavender },
    { name: 'Lavender', primary: '#A47BB9', primaryDark: '#8A66A0', image: purple }
];


const Menu = ({ isOpen, onClose }: MenuProps) => {
    // const { user, isAuthenticated, logout } = useAuth();
    const { t } = useI18n();
    const isAuthenticated: boolean = true;

    // Handle Escape key press to close menu
    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscKey);

        // Prevent scrolling when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            window.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Handle logout
    const handleLogout = () => {
        onClose();
    };

    // Function to change theme color
    const changeThemeColor = (primary: string, primaryDark: string, image: string | undefined) => {
        // Update CSS variable in the document root
        document.documentElement.style.setProperty('--primary', primary);
        document.documentElement.style.setProperty('--primary-dark', primaryDark);

        if (image) {
            document.documentElement.style.setProperty('--logo', `url(${image})`);
        }

        // Save user preference to localStorage

        localStorage.setItem('primary', primary);
        localStorage.setItem('primary-dark', primaryDark);
        if (image) {
            localStorage.setItem('logo', image);
        }

    };

    // Initialize theme from localStorage when component mounts
    useEffect(() => {
        const savedPrimary = localStorage.getItem('primary');
        const savedDark = localStorage.getItem('primary-dark');
        const logo = localStorage.getItem('logo');
        if (savedDark && savedPrimary && logo) {
            changeThemeColor(savedPrimary, savedDark, logo || undefined);
        }
    }, []);

    // User specific renders

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
                                <li><Link to="/teachers" onClick={onClose}>{t('navigation.teachers')}</Link></li>
                                <li><Link to="/cons/blog" onClick={onClose}>{t('navigation.journal')}l</Link></li>
                                <li><Link to="/cons/games" onClick={onClose}>{t('navigation.games')}</Link></li>
                                <li><Link to="/cons/courses" onClick={onClose}>{t('navigation.courses')}</Link></li>
                                <li><Link to="/cons/competition" onClick={onClose}>{t('navigation.competitions')}</Link></li>
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
                                        onClick={() => changeThemeColor(color.primary, color.primaryDark, color.image)}
                                        aria-label={`Set theme to ${color.name}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Authentication actions */}
                        <div className="auth-actions">
                            {isAuthenticated ? (
                                <button className="logout-button" onClick={handleLogout}>
                                    {t('buttons.logout')}
                                </button>
                            ) : (
                                <div className="login-actions">
                                    <Link to="/login" className="login-button" onClick={onClose}>
                                        {t('buttons.login')}
                                    </Link>
                                    <Link to="/register" className="register-button" onClick={onClose}>
                                        {t('buttons.register')}
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