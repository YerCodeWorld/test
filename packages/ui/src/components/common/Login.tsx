import {useEffect} from "react";
import '../../styles/components/common/Login.css';


const LoginPage = () => {

    // Will use this as a reminder that setting a useEffect for isLoading can be really useful

    useEffect(() => {
        document.title = "EduGuiders - Login";
    }, []);

    return (
        <div className="auth-page register-page">
            <div className="auth-container">
                <div className="auth-content">
                    <div className="auth-header">
                        <h1>Create Your Account</h1>
                    </div>

                    <hr />

                    <div className="social-auth">
                        <button className="social-button google">
                            <span className="social-icon">G</span>
                            <span>Sign up with Google</span>
                        </button>

                        <button className="social-button facebook">
                            <span className="social-icon">f</span>
                            <span>Sign up with Facebook</span>
                        </button>
                    </div>

                </div>

                <div className="auth-image registration">
                    <div className="image-overlay">
                        <div className="overlay-content">

                            <div className="login-icon">
                                <i className="fas fa-user-plus"></i>
                            </div>

                            <h2>Start your learning journey today</h2>
                            <p>
                                Join thousands of students and teachers on our platform
                                and take the next step in your educational growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


};


export default LoginPage;