import {useEffect} from "react";
import '../../styles/components/common/Login.css';


const LoginPage = () => {

    // Will use this as a reminder that setting a useEffect for isLoading can be really useful

    useEffect(() => {
        document.title = "EduGuiders - Login";
    }, []);

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="first-child">
                    <div className="login-header">
                        <h1>Create Your Account</h1>
                    </div>
                    <hr />
                    <div className="Oauth-links">
                        <button className="Oauth google">
                            <span className="Oauth-google-icon">G</span>
                            <span>Sign up with Google</span>
                        </button>
                        <button className="Oauth facebook">
                            <span className="Oauth-facebook-icon">f</span>
                            <span>Sign up with Facebook</span>
                        </button>
                    </div>
                </div>
                <div className="login-message">
                    <div className="message-content">
                        <div className="message-icon">
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
    )


};


export default LoginPage;