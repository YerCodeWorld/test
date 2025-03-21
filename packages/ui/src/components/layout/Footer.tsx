// src/components/layout/Footer.tsx

import { Link } from 'react-router-dom';
import { useI18n } from "@repo/i18n/src/index";
import '../../styles/components/layout/footer.css';

const Footer = () => {
    const { t } = useI18n();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Company information */}
                    <div className="footer-section about">
                        <h3>EduGuiders</h3>
                        <p>{t('footer.subtitle')}</p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="footer-section links">
                        <h3>{t('footer.quickLinks')}</h3>
                        <ul>
                            <li><Link to="/">{t('navigation.home')}</Link></li>
                            <li><Link to="/teachers">{t('navigation.teachers')}</Link></li>
                            <li><Link to="/articles">{t('navigation.journal')}</Link></li>
                            <li><Link to="/courses">{t('navigation.courses')}</Link></li>
                            <li><Link to="/games">{t('navigation.games')}</Link></li>
                            <li><Link to="/competitions">{t('navigation.competitions')}</Link></li>
                        </ul>
                    </div>

                    {/* Support links */}
                    <div className="footer-section links">
                        <h3>{t('footer.support.title')}</h3>
                        <ul>
                            <li><Link to="/help">{t('footer.support.help')}</Link></li>
                            <li><Link to="/faq">{t('footer.support.FAQ')}Q</Link></li>
                            <li><Link to="/contact">{t('footer.support.contact')}</Link></li>
                            <li><Link to="/terms">{t('footer.support.terms')}</Link></li>
                            <li><Link to="/privacy">{t('footer.support.privacy')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact information */}
                    <div className="footer-section contact">
                        <h3>{t('footer.contact')}</h3>
                        <address>
                            <p><i className="fa fa-map-marker"></i> La Romana, Calle Espaillat #169</p>
                            <p><i className="fa fa-phone"></i> +1 (829) 333 6925</p>
                            <p><i className="fa fa-envelope"></i> yahiradolfo39@gmail.com</p>
                        </address>

                        {/* Newsletter subscription */}
                        <div className="newsletter">
                            <h4>{t('')}</h4>
                            <form className="newsletter-form">
                                <input
                                    type="email"
                                    placeholder={t('footer.placeholder')}
                                    required
                                />
                                <button type="submit">
                                    {t('footer.subscribe')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright bar */}
            <div className="copyright-bar">
                <div className="container">
                    <p>&copy; {currentYear} EduGuiders. {t('footer.rights')}</p>
                    <p>{t('footer.love')} <span className="heart">♥</span> {t('footer.loveContinue')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;