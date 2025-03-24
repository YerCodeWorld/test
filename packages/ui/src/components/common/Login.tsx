import {useEffect} from "react";
import { useI18n } from "@repo/i18n";
import '../../styles/components/common/Login.css';


const LoginPage = () => {

    // Will use this as a reminder that setting a useEffect for isLoading can be really useful
    const{ t } = useI18n();

    useEffect(() => {
        document.title = "EduGuiders - Login";
    }, []);

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="first-child">
                    <div className="login-header">
                        <h1>{t('login.main')}</h1>
                    </div>
                    <hr />
                    <div className="Oauth-links">
                        <button className="Oauth google">
                            <span className="Oauth-google-icon">G</span>
                            <span>{t('login.google')}</span>
                        </button>
                        <button className="Oauth facebook">
                            <span className="Oauth-facebook-icon">f</span>
                            <span>{t('login.facebook')}</span>
                        </button>
                    </div>
                </div>
                <div className="login-message">
                    <div className="message-content">
                        <div className="message-icon">
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <h2>{t('login.message')}</h2>
                        <p>{t('login.paragraph')}</p>
                    </div>
                </div>
            </div>
        </div>
    )


};


export default LoginPage;