import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (code) {
            console.log("OAuth Code:", code);
            (async () => {
                await exchangeCodeForToken(code);
            })().catch(err => {
                console.error('Failed to initialize i18n:', err)
            });
        } else {
            console.error("OAuth callback failed.");
        }
    });  // Empty dependency array ensures the effect only runs once

    const exchangeCodeForToken = async (code: string) => {
        try {
            const response = await fetch("https://oauth2.googleapis.com/token", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    client_id: "YOUR_CLIENT_ID",
                    client_secret: "YOUR_CLIENT_SECRET",
                    code: code,
                    grant_type: "authorization_code",  // ✅ Important
                    redirect_uri: "http://localhost:5173/auth/callback",
                }),
            });

            const data = await response.json();
            console.log("OAuth Token Response:", data);

            if (data.access_token) {
                localStorage.setItem("oauth_token", data.access_token);
                await fetchUserInfo(data.access_token);  // ✅ Await here
                navigate("/");  // Redirect to home after login
            }
        } catch (error) {
            console.error("Token Exchange Error:", error);
        }
    };

    const fetchUserInfo = async (token: string) => {
        try {
            const response = await fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
                headers: { Authorization: `Bearer ${token}` },
            });

            const userInfo = await response.json();
            console.log("User Info:", userInfo);  // Make sure this is printing the expected user info
        } catch (error) {
            console.error("Failed to fetch user info:", error);
        }
    };

    return <p>Processing login...</p>;
}

export default AuthCallback;
